import React from 'react';
import AppLogo from "../assets/AppLogo.png";
import English from "../assets/flags/ENGLISH.png";
import French from "../assets/flags/FRENCH.png";
import German from "../assets/flags/GERMAN.png";
import Spanish from "../assets/flags/SPANISH.png";
import Portuguese from "../assets/flags/PORTUGUESE.png";
import Chinese from "../assets/flags/MANDARIN.png";
import Hindu from "../assets/flags/HINDI.png";
import Russian from "../assets/flags/RUSSIAN.png";
import Arabic from "../assets/flags/ARABIC.png";
import Swahili from "../assets/flags/SWAHILI.png";
import Japanese from "../assets/flags/JAPANESE.png";
import Greek from "../assets/flags/GREEK.png";
import Polish from "../assets/flags/POLISH.png";
import Italiano from "../assets/flags/ITALIANO.png";
import Ukrainian from "../assets/flags/UKRAINIAN.png";
import LanguageItem from './LanguageItem';
import {useNavigate} from "react-router-dom";

const LanguageList: React.FC = () => {

    const navigate = useNavigate();

    const handleNavigateToFolderSelection = () => {
        navigate("/folderSelection");
    }

    const users = [
        {
            name: 'English',
            sample: 'Hello, welcome to Zen Clutter',
            selected: false,
            imageUrl: English,
        },
        {
            name: 'French',
            sample: 'Bonjour, bienvenue chez Zen Clutter.',
            selected: false,
            imageUrl: French,
        },
        {
            name: 'German',
            sample: 'Hallo, willkommen bei Zen Clutter.',
            selected: false,
            imageUrl: German,
        },
        {
            name: 'Spanish',
            sample: 'Hola, bienvenido a Zen Clutter.',
            selected: false,
            imageUrl: Spanish,
        },
        {
            name: 'Portuguese',
            sample: 'Olá, bem-vindo ao Zen Clutter.',
            selected: false,
            imageUrl: Portuguese,
        },
        {
            name: 'Chinese',
            sample: '你好，欢迎来到 Zen Clutter.',
            selected: false,
            imageUrl: Chinese,
        },
        {
            name: 'Hindu',
            sample: 'नमस्ते, Zen Clutter में आपका स्वागत है।',
            selected: false,
            imageUrl: Hindu,
        },
        {
            name: 'Russian',
            sample: 'Здравствуйте, добро пожаловать в Zen Clutter.',
            selected: false,
            imageUrl: Russian,
        },
        {
            name: 'Arabic',
            sample: 'مرحبًا، أهلاً بك في Zen Clutter.',
            selected: false,
            imageUrl: Arabic,
        },
        {
            name: 'Swahili',
            sample: 'Halo, karibu kwenye Zen Clutter.',
            selected: false,
            imageUrl: Swahili,
        },
        {
            name: 'Japanese',
            sample: 'こんにちは、Zen Clutterへようこそ。',
            selected: false,
            imageUrl: Japanese,
        },
        {
            name: 'Greek',
            sample: 'Γεια σας, καλώς ήρθατε στο Zen Clutter.',
            selected: false,
            imageUrl: Greek,
        },
        {
            name: 'Polish',
            sample: 'Cześć, witamy w Zen Clutter.',
            selected: false,
            imageUrl: Polish,
        },
        {
            name: 'Italiano',
            sample: 'Ciao, benvenuto a Zen Clutter.',
            selected: false,
            imageUrl: Italiano,
        },
        {
            name: 'Ukrainian',
            sample: 'Привіт, ласкаво просимо до Zen Clutter.',
            selected: false,
            imageUrl: Ukrainian,

        },
    ];

    return (
        <div className="items-center justify-center w-full flex flex-col">
            <div className={"flex flex-row items-center justify-center p-4"}>
                <img src={AppLogo} alt="App Logo" className={"w-10 h-8"}/>
                <p className={"text-2xl text-red-500 font-bold"}>&nbsp;Clutter</p>
            </div>
            <div className={"flex flex-col items-center justify-center space-y-2 pb-4"}>
                <p className="justify-center text-slate-700 text-xl font-bold">Select your language</p>
                <p className="justify-center text-slate-700 text-sm">Please select your preferred language below</p>
            </div>
            <div className="w-[450px] p-6 border border-gray-300 rounded-lg justify-center ">
                <ul role="list" className="divide-y divide-gray-100 h-96 overflow-y-auto">
                    {users.map((user, index) => (
                        <LanguageItem key={index} user={user}/>
                    ))}
                </ul>
                <button className="w-96 bg-red-700 h-9 text-white rounded-xl" onClick={handleNavigateToFolderSelection}>Next</button>

            </div>
        </div>
    );
};

export default LanguageList;
