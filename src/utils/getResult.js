import React from "react";
import styled from 'styled-components';
import {shareImage} from "../constants/images";
import {Text} from "../shared/Text";
import {resolve} from "url";

const Link = styled.a`
    color: white;
`
export const getResult = (points) => {
    const step = points*11.05882;
    const stepMD = points*15.23529;
    const stepL = points*21.23529;

    const left = `
            left: ${step}px;
            @media screen and (min-width: 640px){
                 left: ${stepMD}px;
            }
            @media screen and (min-width: 1100px){
                 left: ${stepL}px;
            }
    `

    const url = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
    const title = 'Поборись за приз со мной';
    const image = resolve(url, shareImage);
    const shareText = 'Да пребудет со мной суперсила наставника! #5perspective';
    const queryParams = new URLSearchParams();
    queryParams.append('url', url);
    queryParams.append('title', title);
    queryParams.append('image', image);
    queryParams.append('description', shareText);
    queryParams.append("comment", shareText);

    if (points <= 10){
        return {
            title: 'От 0 до 10 баллов',
            text: ()=>`Пока рановато становиться наставником у стажеров, но не расстраивайся – можешь прокачаться на стажировке в «Пятёрочке». Потом попробуй пройти заново, ведь тебя многому научат!`,
            style: left
        }
    } else if (points > 10 && points < 15){
        return {
            title: 'От 10 до 15 баллов',
            text: ()=>(<Text>{'Из тебя получится хороший наставник, но для того, чтобы им стать, тебе нужно еще многому научиться! \n' +
            '\n' +
            `Ты можешь сделать `}
            <Link href={`http://vk.com/share.php?${queryParams.toString()}`}>репост этой записи к себе на стену
            </Link>
                {` и поучаствовать в розыгрыше призов! Также мы пришлем тебе “в личку” рекомендации по самообразованию от наших коллег и наставников.\n` +
            '\n' +
            'Главное – откликнись на стажировку в «Пятёрочке», пройди отбор и перенимай опыт наставника-профессионала, который прошел длинный путь, чтобы работать с ТОБОЙ!'
            }</Text>),
            style: left
        }
    } else {
        return {
            title: 'Больше 15 баллов',
            text: ()=><Text>
                {'Ого, хороший результат! Ты уже сейчас можешь подать заявку на стажировку в компании. Кто знает, может, скоро ты будешь опытным специалистом и наставником:)\n' +
                '\n' + 'Делай '}
                <Link href={`http://vk.com/share.php?${queryParams.toString()}`}>репост себе на стену</Link> {' - с таким количеством баллов, у тебя большие шансы получить приз!\n' +
                '\n' +
                'Конечно, мы также ждем тебя в команде «Пятёрочки» - ЖМИ!'}
            </Text>,
            style: left
        }
    }
}