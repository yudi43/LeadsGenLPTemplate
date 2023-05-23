import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
aboutCollege: {
width: '100%',
backgroundColor: '#ffffff',
padding: '20px',
fontSize: '18px',
textAlign: 'justify',
margin: '0 auto',
maxWidth: '800px',
},
});

const AboutCollege = () => {
const classes = useStyles();
return (
<div className={classes.aboutCollege}>
<h2 style={{ fontSize: '24px', marginBottom: '20px' }}>About AMC College of Engineering</h2>
<p>
AMC College of Engineering is a prestigious institution located in Bengaluru, Karnataka, India. Established in the year of its inception, it has consistently maintained a reputation for academic excellence and innovation. AMC College of Engineering offers a wide range of undergraduate and postgraduate programs in various fields of engineering and technology.
</p>
<p>
At AMC College of Engineering, students are provided with a holistic learning experience that combines theoretical knowledge with practical exposure. The college has a team of highly qualified and experienced faculty members who are dedicated to imparting quality education and nurturing the intellectual growth of the students.
</p>
<p>
The campus of AMC College of Engineering is spread over a sprawling area and is equipped with state-of-the-art facilities. The college has well-equipped laboratories, modern classrooms, a well-stocked library, and advanced computer centers. The campus also provides hostel facilities for both boys and girls, ensuring a comfortable and secure environment for the students.
</p>
<p>
AMC College of Engineering places a strong emphasis on research and innovation. The college encourages students to actively participate in research activities and provides them with opportunities to collaborate with renowned industry experts and academicians. The college also organizes workshops, seminars, and conferences to promote knowledge exchange and keep the students updated with the latest developments in their respective fields.
</p>
<p>
In addition to academics, AMC College of Engineering also focuses on the overall personality development of its students. The college offers various extracurricular activities, including sports, cultural events, and technical competitions, which help in nurturing the talents and skills of the students.
</p>
<p>
Placement is a key highlight of AMC College of Engineering. The college has a dedicated placement cell that works tirelessly to ensure that students are placed in leading companies and organizations. The placement cell conducts regular training sessions, mock interviews, and workshops to enhance the employability skills of the students. As a result, the college has a commendable track record of placement, with many students securing lucrative job offers from top-tier companies.
</p>
<p>
AMC College of Engineering is committed to producing skilled professionals who can contribute to the growth and development of the nation. With its strong academic foundation, state-of-the-art infrastructure, and industry-oriented approach, the college continues to be a preferred choice for aspiring engineers.
</p>
</div>
);
};

export default AboutCollege;