import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './Questions-style.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
      x: -100,
      opacity: 0,
  },
  visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * .1},
  }),
}

export default function SimpleAccordion() {
  const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios
            .get('http://roywest3.pythonanywhere.com/api/v1/question-list/')
            .then (data => {
              setQuestions(data.data)
            })
    }, [])

  return (
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: .2, once: true }}
      className='SimpleAccordion'
    >
      <motion.div className='Main__title-cont' variants={textAnimation} custom={1}>
                <h1 className='Main__title'>часто задаваемые вопросы</h1>
      </motion.div>
    <motion.div variants={textAnimation} custom={2}>
    {questions.map(question => {
      return (
        <>
          <Accordion
            sx={{
              padding: '10px',
              bgcolor: '#000000',
              textAlign: 'initial',
              border: '2px solid #1f1f1f',
            }}
            variants={textAnimation} custom={2}
          >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
              
                >
                  <QuestionMarkIcon
                     sx={{
                      marginRight: '25px',
                      width: '30px',
                      height: '30px',
                     }}
                  />
                  <Typography 
                   sx={{
                    fontSize: '20px',
                    textTransform: 'uppercase',
                   }}
                  >
                    {question.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: '#848484',
                      fontSize: '16px',
                      lineHeight: '1.9em',
                    }}
                  >
                    {question.description}
                  </Typography>
                </AccordionDetails>
          </Accordion>
        </>
      )
    })}
    </motion.div>
    </motion.div>
  );
}