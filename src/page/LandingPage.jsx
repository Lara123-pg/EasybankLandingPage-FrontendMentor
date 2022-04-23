import React, { useState } from 'react';

import bgIntro from '../assets/bg-intro-desktop.svg';

import api from '../assets/icon-api.svg';
import budgeting from '../assets/icon-budgeting.svg';
import onboarding from '../assets/icon-onboarding.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import online from '../assets/icon-online.svg';
import confetti from '../assets/image-confetti.jpg';
import currency from '../assets/image-currency.jpg';
import mockups from '../assets/image-mockups.png';
import plane from '../assets/image-plane.jpg';
import restaurant from '../assets/image-restaurant.jpg';

import facebook from '../assets/icon-facebook.svg';
import facebookHover from '../assets/icon-facebookHover.svg';

import instagram from '../assets/icon-instagram.svg';
import instagramHover from '../assets/icon-instagramHover.svg';

import twitter from '../assets/icon-twitter.svg';
import twitterHover from '../assets/icon-twitterHover.svg';

import youtube from '../assets/icon-youtube.svg';
import youtubeHover from '../assets/icon-youtubeHover.svg';

import pinterest from '../assets/icon-pinterest.svg';
import pinterestHover from '../assets/icon-pinterestHover.svg';

import logo from '../assets/logo.svg';
import logoLight from '../assets/logoLight.svg';

import '../scss/main.scss';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Article } from '../components/Article';

export function LandingPage() {
    const [iconFacebook, setIconFacebook] = useState(true);
    const [iconYoutube, setIconYoutube] = useState(true);
    const [iconTwitter, setIconTwitter] = useState(true);
    const [iconPinterest, setIconPinterest] = useState(true);
    const [iconInstagram, setIconInstagram] = useState(true);

    const [responsive, setResponsive] = useState(true);
    const [icon, setIcon] = useState(true);

    return(
        <div className='container'>
            <header>
                <img src={logo} alt="Logo da Easybank - Descrição: três barras com a cor verde escuro, verde claro e um verde mais claro, respectivamente e logo após a palavra Easybank em preto." />

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </nav>

                <Button />

                <label className='hamburger' onClick={() => { setResponsive(!responsive) 
                    setIcon(!icon)}}>
                    {icon ? <img src={hamburger} className='hamburgerImg' alt = 'Ícone de menu hamburger'/>
                    : <img src={close} className='closeImg' alt = 'Ícone de fechar'/>}
                </label>

                <div className={responsive ? 'containerMenuClose' : 'containerMenu'}>
                    <nav className='responsiveNav'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className='infoPhoto'>
                    <div className='texts'>
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

                        <Button />
                    </div>

                    <img className='background' src={bgIntro} alt="Background com uma parte verde e azul claro em gradiente e outra parte com azul escuro." />
                    <img className='phones' src={mockups} alt="Imagem mostrando 4 celulares." />
                </div>

                <div className='cards'>
                    <h2>Why choose Easybank?</h2>
                    <p className='mainText'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>

                    <div className='cardsInfo'>
                        <Card 
                            classC = 'card1'

                            image = {online}
                            description = 'Ícone de uma mão segurando 2 cartões'

                            title = 'Online Banking'
                            text = 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
                        />

                        <Card 
                            classC = 'card2'

                            image = {budgeting}
                            description = 'Ícone de um celular com uma mensagem simbolizado dinheiro.'

                            title = 'Simple Budgeting'
                            text = 'See exactly where your money goes each month. Receive notifications when you´re close to hitting your limits.'
                        />

                        <Card 
                            classC = 'card3'

                            image = {onboarding}
                            description = 'Ícone de interação de pessoas.'

                            title = 'Fast Onboarding'
                            text = 'We don´t do branches. Open your account in minutes online and start taking control of your finances right away.'
                        />

                        <Card 
                            classC = 'card4'

                            image = {api}
                            description = 'Ícone de engrenagens computacionais.'

                            title = 'Open API'
                            text = 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
                        />
                    </div>
                </div>

                <div className='articles'>
                    <h2>Latest Articles</h2>

                    <div className='articlesInfo'>
                        <Article 
                            classP = 'article1'

                            imageP = {currency}
                            descriptionP = 'Imagem de várias notas de dinheiro.'

                            name = 'Claire Robinson'
                            title = 'Receive money in any currency with no fees'
                            text = 'The world is getting smaller and we´re becoming more mobile. So why should you be forced to only receive money in a single ...'
                        />

                        <Article 
                            classP = 'article2'

                            imageP = {restaurant}
                            descriptionP = 'Imagem de taças com um prato em um restaurante.'

                            name = 'Wilson Hutton'
                            title = 'Treat yourself without worrying about money'
                            text = 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...'
                        />

                        <Article 
                            classP = 'article3'

                            imageP = {plane}
                            descriptionP = 'Imagem do céu com umas das asas de um avião.'

                            name = 'Wilson Hutton'
                            title = 'Take your Easybank card wherever you go'
                            text = 'We want you to enjoy your travels. This is why we don´t charge any fees on purchases while you´re abroad. We´ll even show you ...'
                        />

                        <Article 
                            classP = 'article4'

                            imageP = {confetti}
                            descriptionP = 'Imagem de confetti.'

                            name = 'Claire Robinson'
                            title = 'Our invite-only Beta accounts are now live!'
                            text = 'After a lot of hard work by the whole team, we´re excited to launch our closed beta. It´s easy to request an invite through the site ...'
                        />
                    </div>
                </div>
            </main>

            <footer>
                <div className='footerContainer'>
                    <div className='logoSocialMedia'>
                        <img src={logoLight} alt="Logo da Easybank - Descrição: três barras com a cor verde escuro, verde claro e um verde mais claro, respectivamente e logo após a palavra Easybank em branco." />

                        <div className='socialMedia'>
                            <a 
                                href="#" 
                                onMouseOver = {() => setIconFacebook(false)}
                                onMouseOut = {() => setIconFacebook(true)}
                            >
                            {iconFacebook ? <img src={facebook} alt="Ícone do Facebook - Descrição: Letra F da cor preta com fundo branco." />
                            :
                            <img src={facebookHover} alt="Ícone do Facebook - Descrição: Letra F da cor preta com fundo azul claro." />
                            }
                            </a>

                            <a 
                                href="#"
                                onMouseOver = {() => setIconYoutube(false)}
                                onMouseOut = {() => setIconYoutube(true)}
                            >
                            {iconYoutube ? <img src={youtube} alt="Ícone do YouTube - Descrição: Fundo branco que tem um retângulo da cor preta com uma seta branca virada para o lado direito." />
                            :
                            <img src={youtubeHover} alt="Ícone do YouTube - Descrição: Fundo azul claro que tem um retângulo da cor preta com uma seta azul claro virada para o lado direito." />    
                            }
                            </a>

                            <a 
                                href="#"
                                onMouseOver = {() => setIconTwitter(false)}
                                onMouseOut = {() => setIconTwitter(true)}
                            >
                            {iconTwitter ? <img src={twitter} alt="Ícone do Twitter - Descrição: Passáro branco." />
                            :
                            <img src={twitterHover} alt="Ícone do Twitter - Descrição: Passáro azul claro." />    
                            }
                            </a>

                            <a 
                                href="#"
                                onMouseOver = {() => setIconPinterest(false)}
                                onMouseOut = {() => setIconPinterest(true)}
                            >
                            {iconPinterest ? <img src={pinterest} alt="Ícone do Pinterest - Descrição: Fundo branco com a letra P da cor preta." />
                            :
                            <img src={pinterestHover} alt="Ícone do Pinterest - Descrição: Fundo azul claro com a letra P da cor preta." />
                            }
                            </a>

                            <a 
                                href="#"
                                onMouseOver = {() => setIconInstagram(false)}
                                onMouseOut = {() => setIconInstagram(true)}
                            >
                            {iconInstagram ?  <img src={instagram} alt="Ícone do Instagram - Descrição: Câmera da cor branca." />
                            :
                            <img src={instagramHover} alt="Ícone do Instagram - Descrição: Câmera da cor azul claro." />
                            }
                            </a> 
                        </div>
                    </div>

                    <nav>
                        <ul>
                            <li id='link1'><a href="#">About Us</a></li>
                            <li id='link2'><a href="#">Careers</a></li>
                            <li id='link3'><a href="#">Contact</a></li>
                            <li id='link4'><a href="#">Support</a></li>
                            <li id='link5'><a href="#">Blog</a></li>
                            <li id='link6'><a href="#">Privacy Policy</a></li>
                        </ul>
                    </nav>

                    <div className='buttonText'>
                        <Button />

                        <p>&copy; Easybank. All Rights Reserved</p>
                    </div>
                </div>

                <div class="attribution">
                    <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
                    <p>Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.</p> 
                </div>
            </footer>
        </div>
    );
}