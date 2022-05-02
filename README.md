<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" >
  </a>

  <h3 align="center">Display IP information about Omegle users in Discord</h3>

  <p align="center">
    Cool javascript code to check out.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![discord example][product-example]

Omegle IP Geolocation information displayed through the developer console and through a discord channel.
It is very simple to use, and can be customized to your liking. Created in JavaScript designed to run on chromium browsers.

I haven't seen anyone implement it with discord so I did. :)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Discord.js](https://discord.js.org/#/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Download the file.

### Installation

_Below is an example of how you can install this webhook!_

1. Get a free API Key at [https://ipgeolocation.io/](https://ipgeolocation.io/)
  ```sh
  Copy the api key (it will be a random string of characters)
  ```
2. Create a discord webhook
   ```sh
   Choose a channel to display messages > edit channel > integrations > webhooks > create webhook > name it anything > copy the webhook URL.
   ```
3. Open the *discord webhook for omegle.js* file in a code editor (or just notepad), and edit:
   ```js
    const apiKey = "IPGEOLOCATION_API_KEY_HERE";
    const webhook = "DISCORD_WEBHOOK_URL_HERE"
   ```
4. Save the file then CTRL + A to copy all the code.
  
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
*How to use it*
1. On omegle.com before starting the video chat, press F12
2. Go to the **Console** tab.
3. Paste all the code into the console, press enter and start a video chat.
4. Done!
[![omegle example][product-screenshot]]
<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Discord - iiferedon#7337 or iiferedon#1337

Project Link: [https://github.com/iiferedon/discord-webhook-omegle-ip-info-geolocation](https://github.com/iiferedon/discord-webhook-omegle-ip-info-geolocation)

<p align="right">(<a href="#top">back to top</a>)</p>



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[product-example]: images/example.png
