"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CANVAS_W = 380;
const CANVAS_H = 440;
const PLAYER_W = 36;
const PLAYER_H = 42;
const BULLET_W = 4;
const BULLET_H = 14;
const ENEMY_W = 38;
const ENEMY_H = 28;

const ENEMY_TYPES = [
  { label: "NullErr", color: "#FF4444", hp: 1 },
  { label: "404", color: "#FF8800", hp: 1 },
  { label: "SegFault", color: "#FF00FF", hp: 2 },
  { label: "Timeout", color: "#00CCFF", hp: 1 },
  { label: "StackOF", color: "#FFFF00", hp: 2 },
  { label: "SyntaxErr", color: "#FF6699", hp: 1 },
];

const BOSS_CONFIG = {
  label: "BSOD.exe",
  color: "#0033FF",
  hp: 30,
  w: 100,
  h: 70,
  speed: 1.2,
};

function drawPlayer(ctx, x, y, flash) {
  ctx.save();
  ctx.translate(x + PLAYER_W / 2, y + PLAYER_H / 2);
  if (flash) {
    ctx.globalAlpha = 0.5;
  }
  // Engine glow
  const grd = ctx.createRadialGradient(0, PLAYER_H / 2, 0, 0, PLAYER_H / 2, 18);
  grd.addColorStop(0, "rgba(139,156,255,0.9)");
  grd.addColorStop(1, "rgba(139,156,255,0)");
  ctx.fillStyle = grd;
  ctx.fillRect(-18, PLAYER_H / 2 - 18, 36, 36);

  // Body
  ctx.fillStyle = "#1A8CFF";
  ctx.beginPath();
  ctx.moveTo(0, -PLAYER_H / 2);
  ctx.lineTo(-PLAYER_W / 2, PLAYER_H / 2 - 8);
  ctx.lineTo(PLAYER_W / 2, PLAYER_H / 2 - 8);
  ctx.closePath();
  ctx.fill();

  // Wings
  ctx.fillStyle = "#0050CC";
  ctx.beginPath();
  ctx.moveTo(-PLAYER_W / 2, PLAYER_H / 2 - 8);
  ctx.lineTo(-PLAYER_W / 2 - 12, PLAYER_H / 2 + 4);
  ctx.lineTo(-PLAYER_W / 2 + 4, PLAYER_H / 2 - 4);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(PLAYER_W / 2, PLAYER_H / 2 - 8);
  ctx.lineTo(PLAYER_W / 2 + 12, PLAYER_H / 2 + 4);
  ctx.lineTo(PLAYER_W / 2 - 4, PLAYER_H / 2 - 4);
  ctx.closePath();
  ctx.fill();

  // Cockpit
  ctx.fillStyle = "#8B9CFF";
  ctx.beginPath();
  ctx.ellipse(0, -4, 8, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawEnemy(ctx, e) {
  ctx.save();
  ctx.translate(e.x + ENEMY_W / 2, e.y + ENEMY_H / 2);
  // Glow
  ctx.shadowColor = e.color;
  ctx.shadowBlur = 10;

  // Bug body
  ctx.fillStyle = e.color + "33";
  ctx.strokeStyle = e.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(-ENEMY_W / 2, -ENEMY_H / 2, ENEMY_W, ENEMY_H, 6);
  ctx.fill();
  ctx.stroke();

  // Antennae
  ctx.strokeStyle = e.color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-8, -ENEMY_H / 2);
  ctx.lineTo(-14, -ENEMY_H / 2 - 8);
  ctx.moveTo(8, -ENEMY_H / 2);
  ctx.lineTo(14, -ENEMY_H / 2 - 8);
  ctx.stroke();

  // HP bar
  const barW = ENEMY_W - 8;
  ctx.fillStyle = "#333";
  ctx.fillRect(-barW / 2, ENEMY_H / 2 - 6, barW, 4);
  ctx.fillStyle = "#8B9CFF";
  ctx.fillRect(-barW / 2, ENEMY_H / 2 - 6, (barW * e.hp) / e.maxHp, 4);

  // Label text
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#fff";
  ctx.font = "bold 8px monospace";
  ctx.textAlign = "center";
  ctx.fillText(e.label, 0, 4);

  ctx.restore();
}

function drawBoss(ctx, boss) {
  if (!boss) return;
  ctx.save();
  ctx.translate(boss.x + boss.w / 2, boss.y + boss.h / 2);

  // Glow
  ctx.shadowColor = "#0044FF";
  ctx.shadowBlur = 30;

  // Body
  ctx.fillStyle = "#001888";
  ctx.strokeStyle = "#0044FF";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(-boss.w / 2, -boss.h / 2, boss.w, boss.h, 10);
  ctx.fill();
  ctx.stroke();

  // Blue screen texture
  ctx.fillStyle = "#0033FF";
  ctx.fillRect(-boss.w / 2 + 6, -boss.h / 2 + 6, boss.w - 12, boss.h - 12);

  // BSOD ":(" face
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 22px monospace";
  ctx.textAlign = "center";
  ctx.fillText(":(", 0, 8);

  // Boss label
  ctx.font = "bold 9px monospace";
  ctx.fillStyle = "#AACCFF";
  ctx.fillText(boss.label, 0, 25);

  // Boss HP bar
  const barW = boss.w - 10;
  ctx.fillStyle = "#000033";
  ctx.fillRect(-barW / 2, boss.h / 2 - 10, barW, 7);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(-barW / 2, boss.h / 2 - 10, (barW * boss.hp) / boss.maxHp, 7);

  ctx.restore();
}

function drawParticles(ctx, particles) {
  particles.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = p.life / p.maxLife;
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawStars(ctx, stars) {
  stars.forEach((s) => {
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawBullets(ctx, bullets, isEnemy = false) {
  bullets.forEach((b) => {
    ctx.save();
    ctx.shadowColor = isEnemy ? "#FF4444" : "#8B9CFF";
    ctx.shadowBlur = 8;
    const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.h);
    if (isEnemy) {
      grad.addColorStop(0, "#FF0000");
      grad.addColorStop(1, "#FF000000");
    } else {
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(1, "#8B9CFF");
    }
    ctx.fillStyle = grad;
    ctx.fillRect(b.x, b.y, b.w, b.h);
    ctx.restore();
  });
}

function drawHUD(ctx, score, health, wave, isBossWave) {
  // Top bar
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0, 0, CANVAS_W, 36);

  // Score
  ctx.fillStyle = "#8B9CFF";
  ctx.font = "bold 11px monospace";
  ctx.textAlign = "left";
  ctx.fillText(`SCORE: ${score}`, 12, 22);

  // Wave
  ctx.fillStyle = isBossWave ? "#FF4444" : "#FFCC00";
  ctx.textAlign = "center";
  ctx.fillText(isBossWave ? "⚠ BOSS WAVE ⚠" : `WAVE ${wave}`, CANVAS_W / 2, 22);

  // Health bar
  ctx.fillStyle = "#555";
  ctx.fillRect(CANVAS_W - 112, 10, 100, 14);
  const hpColor =
    health > 60 ? "#8B9CFF" : health > 30 ? "#FFCC00" : "#FF4444";
  ctx.fillStyle = hpColor;
  ctx.fillRect(CANVAS_W - 112, 10, health, 14);
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 1;
  ctx.strokeRect(CANVAS_W - 112, 10, 100, 14);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 9px monospace";
  ctx.textAlign = "center";
  ctx.fillText("HP", CANVAS_W - 62, 21);
}

export default function SpaceShooter() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    player: { x: CANVAS_W / 2 - PLAYER_W / 2, y: CANVAS_H - PLAYER_H - 20, vx: 0 },
    bullets: [],
    enemyBullets: [],
    enemies: [],
    boss: null,
    particles: [],
    stars: [],
    score: 0,
    health: 100,
    wave: 1,
    isBossWave: false,
    enemiesKilled: 0,
    enemiesPerWave: 8,
    spawnTimer: 0,
    spawnInterval: 90,
    shootTimer: 0,
    enemyShootTimer: 0,
    bossDirection: 1,
    flashTimer: 0,
    gameOver: false,
    win: false,
    keys: {},
    mouseX: null,
  });

  const [gamePhase, setGamePhase] = useState("idle"); // idle | playing | gameover | win
  const [displayScore, setDisplayScore] = useState(0);
  const rafRef = useRef(null);
  const gameLoopRef = useRef(null);

  useEffect(() => {
    stateRef.current.stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * CANVAS_W,
      y: Math.random() * CANVAS_H,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 1.5 + 0.4,
    }));
  }, []);

  const spawnEnemy = useCallback(() => {
    const type = ENEMY_TYPES[Math.floor(Math.random() * ENEMY_TYPES.length)];
    stateRef.current.enemies.push({
      x: Math.random() * (CANVAS_W - ENEMY_W - 20) + 10,
      y: -ENEMY_H - 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: 1.2 + stateRef.current.wave * 0.3,
      hp: type.hp,
      maxHp: type.hp,
      label: type.label,
      color: type.color,
    });
  }, []);

  const spawnBoss = useCallback(() => {
    stateRef.current.boss = {
      ...BOSS_CONFIG,
      x: CANVAS_W / 2 - BOSS_CONFIG.w / 2,
      y: 50,
      maxHp: BOSS_CONFIG.hp,
      hp: BOSS_CONFIG.hp,
    };
    stateRef.current.isBossWave = true;
  }, []);

  const addParticles = useCallback((x, y, color, count = 8) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      stateRef.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * (Math.random() * 3 + 1),
        vy: Math.sin(angle) * (Math.random() * 3 + 1),
        r: Math.random() * 3 + 1.5,
        color,
        life: 30 + Math.random() * 20,
        maxLife: 50,
      });
    }
  }, []);

  const rect = (obj, w, h) => ({ x: obj.x, y: obj.y, w: w || obj.w, h: h || obj.h });
  const overlaps = (a, b) =>
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    if (s.gameOver || s.win) return;

    // Background
    ctx.fillStyle = "#070714";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Grid
    ctx.strokeStyle = "rgba(139,156,255,0.05)";
    ctx.lineWidth = 1;
    for (let i = 0; i < CANVAS_W; i += 40) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, CANVAS_H); ctx.stroke();
    }
    for (let j = 0; j < CANVAS_H; j += 40) {
      ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(CANVAS_W, j); ctx.stroke();
    }

    // Stars scroll
    s.stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > CANVAS_H) { star.y = 0; star.x = Math.random() * CANVAS_W; }
    });
    drawStars(ctx, s.stars);

    // Player movement
    const speed = 4.5;
    if (s.mouseX !== null) {
      const targetX = s.mouseX - PLAYER_W / 2;
      s.player.x += (targetX - s.player.x) * 0.12;
    } else {
      if (s.keys["ArrowLeft"] || s.keys["a"]) s.player.x -= speed;
      if (s.keys["ArrowRight"] || s.keys["d"]) s.player.x += speed;
    }
    s.player.x = Math.max(0, Math.min(CANVAS_W - PLAYER_W, s.player.x));

    // Auto-shoot
    s.shootTimer++;
    if (s.shootTimer >= 14) {
      s.shootTimer = 0;
      s.bullets.push({
        x: s.player.x + PLAYER_W / 2 - BULLET_W / 2,
        y: s.player.y - BULLET_H,
        w: BULLET_W,
        h: BULLET_H,
        vy: -12,
      });
    }

    // Move bullets
    s.bullets = s.bullets.filter((b) => {
      b.y += b.vy;
      return b.y > -b.h;
    });

    // Enemy spawn
    if (!s.isBossWave) {
      s.spawnTimer++;
      if (s.spawnTimer >= s.spawnInterval) {
        s.spawnTimer = 0;
        spawnEnemy();
        s.enemiesKilled++;
        if (s.enemiesKilled >= s.enemiesPerWave) {
          if (s.wave % 3 === 0) {
            // Boss wave every 3 waves
            spawnBoss();
          } else {
            s.wave++;
            s.enemiesKilled = 0;
            s.spawnInterval = Math.max(40, s.spawnInterval - 8);
          }
        }
      }
    }

    // Boss behavior
    if (s.boss) {
      s.boss.x += s.bossDirection * s.boss.speed;
      if (s.boss.x <= 0 || s.boss.x + s.boss.w >= CANVAS_W) {
        s.bossDirection *= -1;
      }
      // Boss shoots
      s.enemyShootTimer++;
      if (s.enemyShootTimer >= 45) {
        s.enemyShootTimer = 0;
        // Spread shot
        for (let i = -1; i <= 1; i++) {
          s.enemyBullets.push({
            x: s.boss.x + s.boss.w / 2 + i * 20,
            y: s.boss.y + s.boss.h,
            w: 5,
            h: 12,
            vy: 5,
            vx: i * 1.5,
          });
        }
      }
    } else if (s.enemies.length > 0) {
      // Random enemy shooting
      s.enemyShootTimer++;
      if (s.enemyShootTimer >= 80) {
        s.enemyShootTimer = 0;
        const shooter = s.enemies[Math.floor(Math.random() * s.enemies.length)];
        if (shooter) {
          s.enemyBullets.push({
            x: shooter.x + ENEMY_W / 2 - 2,
            y: shooter.y + ENEMY_H,
            w: 4,
            h: 10,
            vy: 4 + s.wave,
            vx: 0,
          });
        }
      }
    }

    // Move enemy bullets
    s.enemyBullets = s.enemyBullets.filter((b) => {
      b.x += b.vx || 0;
      b.y += b.vy;
      return b.y < CANVAS_H;
    });

    // Move enemies
    s.enemies = s.enemies.filter((e) => {
      e.x += e.vx;
      e.y += e.vy;
      if (e.x <= 0 || e.x + ENEMY_W >= CANVAS_W) e.vx *= -1;
      // Hit bottom → damage player
      if (e.y > CANVAS_H) {
        s.health -= 10;
        s.flashTimer = 10;
        return false;
      }
      return true;
    });

    // Bullet vs enemies
    s.bullets = s.bullets.filter((b) => {
      let hit = false;
      s.enemies = s.enemies.filter((e) => {
        if (!hit && overlaps(rect(b), rect(e, ENEMY_W, ENEMY_H))) {
          e.hp--;
          hit = true;
          if (e.hp <= 0) {
            addParticles(e.x + ENEMY_W / 2, e.y + ENEMY_H / 2, e.color, 10);
            s.score += 10;
            return false;
          }
        }
        return true;
      });

      // Bullet vs boss
      if (!hit && s.boss) {
        if (overlaps(rect(b), { x: s.boss.x, y: s.boss.y, w: s.boss.w, h: s.boss.h })) {
          s.boss.hp--;
          hit = true;
          addParticles(b.x, b.y, "#0044FF", 4);
          if (s.boss.hp <= 0) {
            addParticles(s.boss.x + s.boss.w / 2, s.boss.y + s.boss.h / 2, "#0044FF", 20);
            s.score += 100;
            s.boss = null;
            s.isBossWave = false;
            s.wave++;
            s.enemiesKilled = 0;
            s.spawnInterval = Math.max(35, s.spawnInterval - 10);
          }
        }
      }
      return !hit;
    });

    // Enemy bullets vs player
    s.enemyBullets = s.enemyBullets.filter((b) => {
      if (
        overlaps(
          { x: b.x, y: b.y, w: b.w, h: b.h },
          { x: s.player.x + 4, y: s.player.y + 4, w: PLAYER_W - 8, h: PLAYER_H - 8 }
        )
      ) {
        s.health -= 8;
        s.flashTimer = 8;
        addParticles(b.x, b.y, "#FF4444", 5);
        return false;
      }
      return true;
    });

    // Flash timer
    if (s.flashTimer > 0) s.flashTimer--;

    // Particles
    s.particles = s.particles.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.life--;
      return p.life > 0;
    });

    // Draw
    drawBullets(ctx, s.bullets, false);
    drawBullets(ctx, s.enemyBullets, true);
    s.enemies.forEach((e) => drawEnemy(ctx, e));
    drawBoss(ctx, s.boss);
    drawPlayer(ctx, s.player.x, s.player.y, s.flashTimer > 0);
    drawParticles(ctx, s.particles);
    drawHUD(ctx, s.score, s.health, s.wave, s.isBossWave);

    // Win condition
    if (s.wave > 6 && !s.boss) {
      s.win = true;
      setDisplayScore(s.score);
      setGamePhase("win");
      return;
    }

    // Game over
    if (s.health <= 0) {
      s.health = 0;
      s.gameOver = true;
      setDisplayScore(s.score);
      setGamePhase("gameover");
      return;
    }

    setDisplayScore(s.score);
    rafRef.current = requestAnimationFrame(() => gameLoopRef.current());
  }, [spawnEnemy, spawnBoss, addParticles]);

  useEffect(() => {
    gameLoopRef.current = gameLoop;
  }, [gameLoop]);

  const startGame = useCallback(() => {
    const s = stateRef.current;
    s.player = { x: CANVAS_W / 2 - PLAYER_W / 2, y: CANVAS_H - PLAYER_H - 20, vx: 0 };
    s.bullets = [];
    s.enemyBullets = [];
    s.enemies = [];
    s.boss = null;
    s.particles = [];
    s.score = 0;
    s.health = 100;
    s.wave = 1;
    s.isBossWave = false;
    s.enemiesKilled = 0;
    s.spawnTimer = 0;
    s.spawnInterval = 90;
    s.shootTimer = 0;
    s.enemyShootTimer = 0;
    s.bossDirection = 1;
    s.flashTimer = 0;
    s.gameOver = false;
    s.win = false;
    setDisplayScore(0);
    setGamePhase("playing");
    rafRef.current = requestAnimationFrame(gameLoop);
  }, [gameLoop]);

  // Input handlers
  useEffect(() => {
    if (gamePhase !== "playing") return;
    const s = stateRef.current;

    const onKey = (e) => { s.keys[e.key] = e.type === "keydown"; };
    const onMouseMove = (ev) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      s.mouseX = (ev.clientX - rect.left) * scaleX;
    };
    const onMouseLeave = () => { s.mouseX = null; };
    const onTouch = (ev) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      const scaleX = CANVAS_W / r.width;
      s.mouseX = (ev.touches[0].clientX - r.left) * scaleX;
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
      canvas.addEventListener("touchmove", onTouch, { passive: true });
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
      if (canvas) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
        canvas.removeEventListener("touchmove", onTouch);
      }
    };
  }, [gamePhase]);

  // Pause on visibility change
  useEffect(() => {
    const onVisChange = () => {
      if (document.hidden && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      } else if (!document.hidden && gamePhase === "playing" && !stateRef.current.gameOver) {
        rafRef.current = requestAnimationFrame(gameLoop);
      }
    };
    document.addEventListener("visibilitychange", onVisChange);
    return () => document.removeEventListener("visibilitychange", onVisChange);
  }, [gamePhase, gameLoop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className="flex w-full max-w-[540px] select-none flex-col items-center gap-2">
      <div className="relative w-full overflow-hidden rounded-2xl border-2 border-[#8B9CFF]/40 shadow-[0_0_24px_rgba(139,156,255,0.14)]">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="block h-auto w-full"
          style={{ imageRendering: "pixelated" }}
        />

        {/* Idle overlay */}
        {gamePhase === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070714]/90 gap-4 p-4">
            <div className="text-center px-4">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="mb-1 font-mono text-xl font-black text-[#8B9CFF]">BUG BLASTER</h3>
              <p className="font-mono text-gray-400 text-xs leading-relaxed mb-1">
                Shoot the software bugs!
              </p>
              <p className="font-mono text-gray-500 text-[10px]">
                Move: Mouse / Arrow Keys<br />
                Defeat all waves to win
              </p>
            </div>
            <button
              onClick={startGame}
              className="rounded-xl border-4 border-black bg-[#8B9CFF] px-7 py-2.5 font-mono text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:text-sm"
            >
              START GAME
            </button>
          </div>
        )}

        {/* Game Over overlay */}
        {gamePhase === "gameover" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070714]/92 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">💀</div>
              <h3 className="font-mono font-black text-[#FF4444] text-2xl mb-1">GAME OVER</h3>
              <p className="mb-1 font-mono text-lg font-bold text-[#8B9CFF]">SCORE: {displayScore}</p>
              <p className="font-mono text-gray-400 text-xs">The bugs have won... for now.</p>
            </div>
            <button
              onClick={startGame}
              className="font-mono font-black text-black bg-[#FF4444] px-8 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-sm uppercase tracking-widest"
            >
              TRY AGAIN
            </button>
          </div>
        )}

        {/* Win overlay */}
        {gamePhase === "win" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070714]/92 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">🏆</div>
              <h3 className="font-mono font-black text-[#FFCC00] text-2xl mb-1">YOU WIN!</h3>
              <p className="mb-1 font-mono text-lg font-bold text-[#8B9CFF]">SCORE: {displayScore}</p>
              <p className="font-mono text-gray-400 text-xs">All bugs squashed. Ship it! 🚀</p>
            </div>
            <button
              onClick={startGame}
              className="font-mono font-black text-black bg-[#FFCC00] px-8 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-sm uppercase tracking-widest"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {gamePhase === "playing" && (
        <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
          <span>← → or Mouse to move</span>
          <span className="font-bold text-[#8B9CFF]">AUTO-FIRE</span>
        </div>
      )}
    </div>
  );
}
