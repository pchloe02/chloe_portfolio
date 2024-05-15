import React from 'react'
import './Socialbar.css'

export default function Socialbar() {
    return (
        <div class="social">
            <a href="#">
                <div class="social-btn color-bg">
                    <div class="icons8-linkedin"></div>
                    <p class="google-font">Linkedin</p>
                </div>
            </a>
            <a href="#">
                <div class="social-btn color-bg">
                    <div class="icons8-github"></div>
                    <p class=" google-font">Github</p>
                </div>
            </a>
            <a href="#">
                <div class="social-btn color-bg">
                    <div class="icons8-mail"></div>
                    <p class="google-font">Mail</p>
                </div>
            </a>
        </div>
    )
}
