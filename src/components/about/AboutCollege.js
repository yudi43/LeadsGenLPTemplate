import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  aboutCollege: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    color: '#000000', // Set text color to black
    textAlign: 'center',
    padding: '20px',
    margin: '0 auto', // Added margin property
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
});

const AboutCollege = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutCollege}>
    <div>
      <h2 className={classes.heading}>About AMC College of Engineering, Bangalore</h2>
        <br />
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
  </div>
  );
};

export default AboutCollege;
