
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "محقق🕵️‍♀️", level: 0 }, { name: "مغوار🪽", level: 4 }, 
      { name: "محارب🧜‍♂", level: 8 }, { name: "صياد🪼", level: 12 }, 
      { name: "ساحر🧙🏻‍♀️", level: 16 }, { name: "قرصان🏴‍☠️", level: 20 }, 
      { name: "قناص⚡", level: 24 }, { name: "نينجا🥷", level: 28 }, 
      { name: "فارس🏇🏻", level: 32 }, { name: "سيد النار🔥", level: 36 },
      { name: "نـخـبة⛩️", level: 48 }, { name: "سيد الجليد❄️", level: 52 }, 
      { name: "الحاكم🔱", level: 56 }, { name: "القائد🌬", level: 60 }, 
      { name: "مـلـك🫅", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}

