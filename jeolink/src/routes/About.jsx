import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Footer from '../components/Footer';
import { Box, Container, Divider, styled } from '@mui/material';

const About = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container>
    <Divider sx={{ marginTop:'20px'}}/>
    <Box sx={{justifyContent:'space-between', display:'flex', placeItems:'center'}}>
    <Typography variant="h2" color="initial">About Us</Typography>
    <Typography variant="body1" color="initial" > {date.toDateString()}</Typography>
    </Box>
    <Box>
      <Divider/>
      <Typography variant="h6" color="initial" sx={{mt:'10px', mb:'10px'}}>VALUE:</Typography>
      <Typography variant="body1" color="initial" sx={{mt:'10px', mb:'10px'}}>Love and respect for individuals, growth and continuous research are the principal values in which JEOLINKS strongly believes. These
      values will dictate all the policy making decisions within JEOLINKS. JEOLINKS writes its mission statement as below:</Typography>
      <Box sx={{mt:'10px', mb:'10px'}}>
      <Typography variant="h6" color="initial">Mission:</Typography>
      <Typography variant="body2" color="initial" sx={{mt:'10px', mb:'10px'}}>“JEOLINKS’S mission is to become Nigeria’s number one provider of Information and Communication Technologies to the Consulting industry and
      be known for providing best in class web application products to increase the efficiency of consulting communities. JEOLINKS’S mission is to
      provide its technology solution to 5% of consulting market in Edo and Ekiti State by the end of December 2020 with 98% of customer satisfaction.
      JEOLINKS’S mission is to offer technical leadership and services to customers with a focus on providing innovative solutions, delivering exceptional
      customer service, and creating a reliable infrastructure that demonstrates value to the clients, companies, and institutions, businesses, and
      JEOLINKS communities</Typography>
      <Typography variant="h6" color="initial">Vision:</Typography>
      <Typography variant="body2" color="initial" sx={{mt:'10px', mb:'10px'}}>“JEOLINKS’S vision is to increase knowledge awareness and access to innovative technology and information for people leaving in rural
      communities”. “JEOLINKS’S vision is to transform the efficiency of consulting process in Nigeria by introducing them to new information and
      communications technologies. JEOLINKS would help their customers improve the efficiency and quality of Consulting.”</Typography>
      <Typography variant="h6" color="initial">WHO we are?</Typography>
      <Typography variant="body2" color="initial" sx={{mt:'10px', mb:'10px'}}>The Company originally started in 2018 as a startup firm, JEOLINKS has pave its way into the heights of innovative technology services world and
      envision to develop clients into informed, proactive users of internet services. Thinking and acting strategically with technology occurs through
      strong partnerships and an engaged community. Additionally, for technologies to take on integral meaning to our work, we also need reliable
      and consistent support in using them. With great Team across all of JEOLINKS’ communities, as well as a 24x7 IT Service Desk, we collaborate
      with institutions and organizations to meet the demands of a global, JEOLINKS Community Platform and to enable the broadest possible access.</Typography>
      <Typography variant="h6" color="initial">WHAT we do:</Typography>
      <Typography variant="body2" color="initial" sx={{mt:'10px', mb:'10px'}}>Across our diverse and creative teams, we engage and focus our collective talent to strengthen JEOLINKS’ strategic IT capabilities. To keep pace
      with our community’s emerging needs, we continue to evolve our competencies across four main families of practice, including Planning and
      Design, Service Delivery and Operations, Data Strategy, and Innovative Technology</Typography>
      <Typography variant="h6" color="initial">WHY JEOLINKS?</Typography>
      <Typography variant="body2" color="initial">JEOLINKS is becoming one of the leading Consulting technology providers in Nigeria. JEOLINKS is known for its educational blend of research and
      web solutions, with four main directorates, including a Research, Technology, Education and Communication services. These practices create a
      unique combination that attracts community, clients and customers who thrive in an environment of research, creativity and information access.
      JEOLINKS recognizes the importance of the following in order to achieve educational, research, communication and technology success:</Typography>
      </Box>
      <Typography variant="subtitle1" textAlign={'center'} color="initial" sx={{fontWeight:'600'}}>Efficient Project Management - Updated Technologies - 24x7 IT Services Desk - Communication Channel - Grass Roots Consultation -
      Technical Leadership - Local Relevant Content</Typography>
      <Typography variant="body1" color="initial" sx={{mt:'10px', mb:'10px'}}>JEOLINKS Research Group, an organization is focused on providing innovative technology solutions, delivering exceptional community service,
      and creating a reliable infrastructure that demonstrates value to the clients, companies, institutions, businesses, and communities of JEOLINKS.
      Our pricing is completely custom-made and is based on your objectives.</Typography>
      <Typography variant="overline" color="initial" sx={{mt:'10px', mb:'10px'}}>Executive Council</Typography>
      <Typography variant="body1" color="initial" textAlign={'center'}>The Executive Council, (an exceptionally talented Crew) Focus on communicating and marketing values that delivers to clients exactly what communication
      promises. JEOLINKS on Strategies that makes sense (yes, being talked about can be nice, but clients tell us being profitable matters more), Creative that works
      (who doesn’t like winning awards, but have you ever heard of them making clients any money?) and on Target message delivery (saying all the right things – in
      all the wrong places – is pretty much a waste of breath)</Typography>
      <Typography variant="body1" color="initial" textAlign={'center'} mt={'20px'}>On purpose, on strategy, on massage, on target – if we focus on your success, we’ll succeed; too</Typography>
      <Typography variant="body1" color="initial" mt={'20px'} textAlign={'center'}>We're a small, Friendly and Talented team. We craft Beautiful developmental solutions for awesome clients/communities across all the platform.
      Enterprise & Research<b> (GCEO)</b> – Enterprise & Management <b>(GMD) –</b> Enterprise & Operation <b>(GM/COO) –</b> Digital & Technology <b>(CDO) –</b> Business & Communication <b>(CBO) –</b> Finance & Resource Mgt. <b>(CFO) –</b> Administration & Legal Mgt. <b>(CAO) –</b><br/>
      Sustainability & Development <b>(CSO) –</b> Learning & Education <b>(CLO) –</b> System & Production <b>(CIO) -</b> Marketing & Communication <b>(CMO) –</b><br/>Research & Computation <b>(CRO) -</b> Program & Education <b>(CPO) –</b> Technology & Architecture <b>(CTO) -</b> Clients & Communication <b>(CCO) -</b><br/>Marketing & Promotion <b>(HMP) -</b> Hardware & Computer <b>(HHC) –</b> Legal & Compliance <b>(HLC) –</b> Finance & Accounts <b>(HFA) –</b> Events & Operations
      <b>(HEO) –</b> Graphic & Designs <b>(HGP) -</b> Membership & Development <b>(HMD) -</b> Program & Operations <b>(HPO) –</b> Research & Development <b>(HRD)</b></Typography>
      </Box>
<Footer/>
    </Container>
  )
}

export default transition(About)
