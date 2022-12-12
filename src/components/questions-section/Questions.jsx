import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './Questions-style.css';
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
              HOW TO DOWNLOAD THE GAME?
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
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            padding: '10px',
            bgcolor: '#000000',
            textAlign: 'initial',
            border: '2px solid  #1f1f1f',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
              IS THERE ANY AGE RESTRICTIONS?
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
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            padding: '10px',
            bgcolor: '#000000',
            textAlign: 'initial',
            border: '2px solid #1f1f1f',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
              IS THERE ANY REWARD FOR WINNERS?
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
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.           </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            padding: '10px',
            bgcolor: '#000000',
            textAlign: 'initial',
            border: '2px solid #1f1f1f',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
              HOW TO BECOME A TEAM MEMBER?
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
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.           </Typography>
          </AccordionDetails>
        </Accordion>
    </motion.div>
    </motion.div>
  );
}