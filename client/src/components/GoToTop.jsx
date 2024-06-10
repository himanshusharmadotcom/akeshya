import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import styled from 'styled-components';

const Button = styled.button`
    display: ${props => props.visible ? 'block' : 'none'};
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primaryColor};
    color: #fff;
    position: fixed;
    bottom: 50px;
    right: 50px;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 999999;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 120) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <Button onClick={scrollToTop}>
                <MdOutlineKeyboardDoubleArrowUp />
            </Button>
        )
    );
};

export default GoToTop;
