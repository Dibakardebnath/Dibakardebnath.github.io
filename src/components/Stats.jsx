import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import GitHubCalendarComponent from './GitHubCalendarComponent';

export const Stats = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <Box id="statistics" >
            <Heading data-aos="fade-down" textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]} color={isDarkMode ? "#f1f5f9" : "#0f172a"}>My Git  <span  style={{ color: "#7c3aed" }}>Calender</span></Heading>
            <GitHubCalendarComponent />
            <Heading textAlign={'center'} fontSize={["2xl","3xl","4xl","4xl"]} color={isDarkMode ? "#f1f5f9" : "#0f172a"}> My github  <span  style={{ color: "#7c3aed" }}>stats</span></Heading>
            <Box className='stat-container'>
                <Box className='statone' data-aos="fade-up" >
                    <img id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=Dibakardebnath&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
                        alt="GitHub Stats"/>
                </Box>
                <Box className='stattwo' data-aos="fade-down" data-aos-duration="1000" > 
                <img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com/?user=Dibakardebnath&theme=transparent&hide_border=true" alt="GitHub Streak Stats" />
               </Box>
                <Box className='statthree' data-aos="fade-up" data-aos-duration="1000" > <img id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dibakardebnath&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
                    alt="GitHub Top Languages" />
                  </Box>
            </Box>
        </Box>
    );
};

