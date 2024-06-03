import React from 'react'
import './Socialbar.css'

export default function Socialbar() {
    return (
        <div class="social">
            <a href="https://www.linkedin.com/in/chlo%C3%A9-pelerin-766a08213/" target="_blank">
                <div class="social-btn color-bg">
                    <div class="icons8-linkedin"></div>
                    <p class="google-font-2">Linkedin</p>
                </div>
            </a>
            <a href="https://github.com/pchloe02" target="_blank">
                <div class="social-btn color-bg">
                    <div class="icons8-github"></div>
                    <p class=" google-font">Github</p>
                </div>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pelerinchloe@gmail.com" target="_blank">
                <div class="social-btn color-bg">
                    <div class="icons8-mail"></div>
                    <p class="google-font">Mail</p>
                </div>
            </a>
        </div>
    )
}
