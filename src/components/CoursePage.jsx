import './CoursePage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles.module.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CourseBar from './CourseBar';
import PageCard from './pageCard';
import announcementData from "../data/announcements.json"
import assignmentData from "../data/assignments.json"
import moduleData from "../data/modules-metadata.json"
import gradesData from "../data/grades.json"
import zoomData from "../data/zoom.json"
import {useParams} from "react-router-dom";
import AssignmentCard from './AssignmentCard';

function CoursePage() {

	const pageArgument = useParams();

	if (pageArgument.pageName != "syllabus" && pageArgument.pageName != "assignments") 
	{
		let data = null;
		switch (pageArgument.pageName) 
		{
			case "announcements":
				data = announcementData;
				break;
			case "modules":
				data = moduleData;
				break;
			case "grades":
				data = gradesData;
				break;
			case "zoom":
				data = zoomData;
				break;
		}

		return (
			<div className="CoursePage">
				<h1>User Interface I</h1>
				<hr />
				<Container>
					<Row className="px-4 my-5">
						<Col sm={2}>
							<CourseBar></CourseBar>
						</Col>
						<Col sm={10}>
							<Container className={styles.contentContainer}>
								{data.map((entry) => <PageCard header={entry.header} subheader={entry.date} body={entry.body} subtype={entry.type}></PageCard>)}
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	} else if (pageArgument.pageName === "assignments")
	{
		let data = assignmentData;
		return (
			<div className="CoursePage">
				<h1>User Interface I</h1>
				<hr />
				<Container>
					<Row className="px-4 my-5">
						<Col sm={2}>
							<CourseBar></CourseBar>
						</Col>
						<Col sm={10}>
							<Container className={styles.contentContainer}>
								{data.map((entry) => <AssignmentCard header={entry.header} subheader={entry.date} body={entry.body} subtype={entry.type}></AssignmentCard>)}
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);

	} else
	{
		return (
			<div className="CoursePage">
				<h1>User Interface I</h1>
				<hr />
				<Container>
					<Row className="px-4 my-5">
						<Col sm={2}>
							<CourseBar></CourseBar>
						</Col>
						<Col sm={10}>
							<Container className={styles.contentContainer}>
								<div>
									<h2><strong>User Interface Design</strong></h2>
									<p><strong>Class times</strong>: Mon, Wed, Fri 1:25pm-2:20pm,</p>
									<p><strong>Location: </strong>Baldwin 661</p>
									<p><strong>Instructor:</strong><span>&nbsp;</span>Dr. Jillian Aurisano</p>
									<p><strong>Email:</strong><span>&nbsp;</span><a href="mailto:jillian.aurisano@uc.edu">jillian.aurisano@uc.edu</a></p>
									<p><strong>Office:</strong><span>&nbsp;</span>812b Rhodes</p>
									<p><strong>Student Hours:</strong><span>&nbsp;</span>After class M and F from 2:20-3:00pm, or by appointment</p>
									<h3><strong>What is this course about:&nbsp;</strong></h3>
									<p>In this class we are going to explore user interface design- a computer science discipline that considers how to make computers and computational systems useful to people.&nbsp;&nbsp;</p>
									<p>We will be doing lots of:</p>
									<ul>
										<li>sketching - to learn how to think visually,</li>
										<li>prototyping- to learn how to evaluate a design before implementing it,</li>
										<li>programming- creating real user interfaces</li>
										<li>critiquing- to learn how to discuss the tradeoffs of different approaches</li>
									</ul>
									<p>At the end of this course, students will be able to:</p>
									<ul>
										<li>Employ usability engineering principles when building computing tools</li>
										<li>Design user interfaces from a user-centered approach</li>
										<li>Prototype user interfaces to refine a design</li>
										<li>Ideate, sketch, elaborate and communicate user experiences and interface designs&nbsp;</li>
										<li>Use techniques to improve a UI's efficiency, learnability and accessibility</li>
										<li>Evaluate user interfaces using human-computer interaction principles</li>
										<li>Conduct heuristic evaluation of user interfaces</li>
										<li>Conduct user testing of computing applications&nbsp;</li>
									</ul>
									<p>My goal is for students to walk away from this class with a portfolio of work that you can be proud of, and that you can include on your resume or CV, to help you take the next step in your careers.&nbsp; I also hope this course inspires you to think critically about what it means to live in a world where computing is ubiquitous and where people are increasingly reliant on the interfaces between them and the vast digital world.&nbsp;&nbsp;</p>
									<h3><strong>Prerequisites:</strong></h3>
									<ul>
										<li>CS2028 Data Structures, EECE3093C.&nbsp;&nbsp;</li>
										<li>Programming experience in C++, Java, Python, Javascript or another language</li>
									</ul>
									<h3><strong>Materials:</strong></h3>
									<p><span>For this class, you will need:</span></p>
									<ul>
										<li><span>A computer for completing assignments</span></li>
										<li><span>A sketchbook with pencils or a tablet for sketching</span></li>
									</ul>
									<h4><strong>Recommended Textbooks:</strong></h4>
									<ul>
										<li>Norman,<span>&nbsp;</span><a href="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/" target="_blank" rel="noopener">The Design of Everyday Things</a>, 2013.</li>
										<li>Buxton,<span>&nbsp;</span><a href="https://www.amazon.com/Sketching-User-Experiences-Interactive-Technologies/dp/0123740371">Sketching User Experiences</a>, Morgan Kaufmann, 2007.</li>
										<li>Shneiderman, <a class="inline_disabled" href="https://www.amazon.com/Designing-User-Interface-Human-Computer-Interaction/dp/013438038X/ref=pd_lpo_1?pd_rd_i=013438038X&amp;psc=1" target="_blank" rel="noopener">Designing the User Interface,</a> Pearson 2017 (6th edition)<a class="inline_disabled" href="https://www.amazon.com/Designing-User-Interface-Human-Computer-Interaction/dp/0321537351" target="_blank" rel="noopener"></a></li>
									</ul>
									<h3><strong>Tentative schedule, subject to change</strong></h3>
									
									<p>&nbsp;</p>
									<h3><strong>Grading:</strong></h3>
									<p>Grades will be assigned based on participation, completion of assignments and course projects, and a final exam, broken down as follows:</p>
									<ul>
										<li>Participation and assignments: 15%</li>
										<li>Projects: 75%, weighted evenly across all projects</li>
										<li>Final exam: 10%</li>
									</ul>
									<h4><strong>Participation and assignments:</strong></h4>
									<p>This course meets in person 3 days a week, and students are expected to attend class, participate in discussions and complete in-class activities.&nbsp; &nbsp;</p>
									<h4><strong>Projects:&nbsp;</strong></h4>
									<p><strong>The best way to learn how to make UIs is to make UIs.</strong>&nbsp;<span>&nbsp;</span><u>There will be 3 projects, that will require<span>&nbsp;</span><strong>significant effort</strong>,</u><span>&nbsp;</span>and thus this is the most significant portion of your grade.&nbsp; The goal of each project is to create an interactive user interface using web technologies.&nbsp; The project assignment will include a description of the problem, the projected user, and a set of tasks that user should be able to perform using your interface.&nbsp; A grade-breakdown will be provided for each project, so you can measure your progress towards concrete benchmarks.&nbsp;&nbsp;</p>
									<p>The first project will be completed<span>&nbsp;</span><em>independently</em><span>&nbsp;</span>to make sure that all students learn html, css and javascript.&nbsp;&nbsp;</p>
									<p>The second and third project will be completed in<span>&nbsp;</span><em>groups</em>.&nbsp; Members of each group will evaluate their teammates anonymously on their contribution to the project, and the project grade for each team-member will incorporate this peer assessment.&nbsp;</p>
									<p>Project deadlines will only be extended if zombies are reported to be walking the streets of Cincinnati by a major news outlet (NYT, CNN, Washington Post&hellip;).&nbsp;</p>
									<h4><strong>Exam:&nbsp;</strong></h4>
									<p>The exam will cover material discussed in class.&nbsp;</p>
									<h4><strong>Grade breakdowns:&nbsp;</strong></h4>
									<ul>
										<li>93.0% and above: A</li>
										<li>90.0%&ndash;92.9%: A-</li>
										<li>87.0%&ndash;89.9%: B+</li>
										<li>83.0%&ndash;86.9%: B</li>
										<li>80.0%&ndash;82.9%: B-</li>
										<li>77.0%&ndash;79.9%: C+</li>
										<li>73.0%&ndash;76.9%: C</li>
										<li>70.0%&ndash;72.9%: C-</li>
										<li>67.0%&ndash;69.9%: D+</li>
										<li>63.0%&ndash;66.9%: D</li>
										<li>60.0%&ndash;62.9%: D-</li>
										<li>Below 60.0%: F</li>
									</ul>
									<p>At the end of the semester, I will look at each student's performance over the entire course and will consider the performance of the whole class, and I may adjust these grade ranges to ensure a fair distribution of grades.&nbsp;</p>
									<h3><strong>Policies:</strong></h3>
									<h4><strong>Student hours:</strong></h4>
									<p>My student hours will be after class on Mondays, Wednesday and Fridays until 3pm, or by appointment.&nbsp;</p>
									<h4><strong>Late projects, assignments:</strong></h4>
									<p>Since we have project presentations scheduled the week after they are due, we can't give extra time on projects.&nbsp; Projects will lose 10 points in score per day, so will effectively lose a letter grade every day they are late.&nbsp; So, a project that meets A criteria, but is submitted a day late, will be assigned a B score, (and 2 days late, a C score, and so on).&nbsp;</p>
									<p>Weekly assignments more than 24 hours late will not be accepted.&nbsp; The only exceptions to this are emergencies or cases where you have obtained permission ahead of time.&nbsp;</p>
									<h4><strong>Absences:</strong></h4>
									<p>Attending class is important.&nbsp; An occasional absence is not a problem, but if you have a compelling reason to miss class (which includes illness, Covid related isolation and quarantine, religious holidays, childcare issues, major family emergencies) &nbsp;please let me know.</p>
									<h4><strong>Academic Honesty:</strong></h4>
									<p>The work you submit is expected to be your own, and the work of your assigned group- both in design and implementation. You may, of course, use online resources to help you debug your code.&nbsp; Cite all the resources you reference in your code. &nbsp;Cheating is bad.&nbsp; At a minimum, cheating will result in failing grade for the entire course.&nbsp; It isn&rsquo;t worth it.&nbsp; Do your own work. &nbsp;&nbsp;&nbsp;</p>
									<h4><strong>Withdrawal Policy</strong></h4>
									<p>You should contact Dr. Aurisano if you are considering withdrawal from the course, and we can discuss your options. See the following link for deadlines and details: https://www.uc.edu/about/registrar/calendars/spring-2022-calendars/spring-dates-deadlines.html.</p>
									<h4><strong>Communication</strong></h4>
									<p>I will typically communicate with the class through a pacing guide for each week, Canvas announcements, and announcements in my slides for each class session. If you have a question for me, first check this syllabus to make sure it has not already been answered.</p>
									<p>If it has not been answered, please feel free to email me at jillian.aurisano@uc.edu. Please include &lsquo;UI Class&rsquo; in the title, so I can more quickly see your email, in the sea of other emails.&nbsp; While I may respond outside of business hours, I cannot guarantee that I will always. I receive many emails as a part of my teaching and research. If I have not responded in 24 hours, your email has almost certainly been pushed off the first page of emails, and I am unlikely to remember it. Therefore, you should email me every 24 hours until I respond.</p>
									<p>You can also direct message me in Discord.&nbsp;&nbsp;</p>
									<h4><strong>Technology use during/for class</strong></h4>
									<p>We will be doing in-class work at times using computers. Tablets are great tools for sketching or taking notes.&nbsp; However, please close social media, email and other content that may be distracting to you and to your classmates.&nbsp; &nbsp;Our class will be most informative and engaging if everyone is participating.&nbsp;</p>
									<h4><strong>Faculty attendance</strong></h4>
									<p>In the (extremely) unlikely event that I am 10 minutes late to class, please send one student to my office, 812b Rhodes, to see if I am there. If I am not, one student should email me. After 15 minutes, if I have not responded otherwise, class should be considered canceled.</p>
									<h4><strong>Class Cancellation Policy</strong></h4>
									<p>If it becomes necessary to cancel class, I will send a Canvas announcement to the class. In addition, I will provide a recorded lecture to replace the class session. If I ever need to cancel class due to unavoidable travel, I will discuss with the class an option to provide a Zoom-based replacement class session.</p>
									<h4><strong>Code of Conduct</strong>:</h4>
									<p>The University Rules, including the Student Code of Conduct (https://www.uc.edu/campus-life/conduct/student-code-of-conduct.html), and other documented policies of the department, college, and university related to academic integrity will be enforced. Any violation of these regulations, including acts of plagiarism or cheating, will be dealt with on an individual basis according to the severity of the misconduct.</p>
									<h4><strong>Special Needs Policy</strong></h4>
									<p>If you have a disability (e.g., visual impairment, hearing impairment, physical impairment, communication disorder, and/or specific learning disability) which may influence your performance in this course or on exams, you must meet with the AESS Disability Services Office https://www.uc.edu/aess/disability.html to arrange for reasonable accommodations to ensure an equitable opportunity to meet all the requirements of the course. If you require accommodations due to disability, please contact DSO at 556-6823, Campus Location: 210 University Pavilion. You will be provided an Accommodation Form indicating your accommodation needs for the semester. Please present this form to your lecture instructor during the first week of the term to ensure your accommodation needs are discussed, agreed upon, and provided. Accommodations will not be provided without this documentation procedure. Exams through testing services will be given the same day and start time as the exam is scheduled for the typical class &amp; the same makeup exam policy applies as above.</p>
									<h4><strong>Counseling Services, UC Main Campus</strong></h4>
									<p>Students have access to counseling and mental health care through the University Health Services (UHS), which can provide both psychotherapy and psychiatric services. In addition, Counseling and Psychological Services (CAPS) can provide professional counseling upon request; students may receive five free counseling sessions through CAPS without insurance. Students are encouraged to seek assistance for anxiety, depression, trauma/assault, adjustment to college life, interpersonal/relational difficulty, sexuality, family conflict, grief and loss, disordered eating and body image, alcohol and substance abuse, anger management, identity development and issues related to diversity, concerns associated with sexual orientation and spirituality concerns, as well as any other issue of concerns. After hours, students may call UHS at 513-556-2564 or CAPS Cares at 513-556-0648. For urgent physician consultation after-hours students may call 513-584-7777.</p>
									<h4><strong>Title IX</strong></h4>
									<p>Title IX is a federal civil rights law that prohibits discrimination on the basis of your actual or perceived sex, gender, gender identity, gender expression, or sexual orientation. Title IX also covers sexual violence, dating or domestic violence, and stalking. If you disclose a Title IX issue to me, I am required to forward that information to the Title IX Office. They will follow up with you about how the University can take steps to address the impact on you and the community and make you aware of your rights and resources. Their priority is to make sure you are safe and successful here. You are not required to talk to the Title IX Office. If you would like to make a report of sex or gender-based discrimination, harassment or violence, or if you would like to know more about your rights and resources on campus, you can consult the website www.uc.edu/titleix or contact the office at 513-556-3349</p>

								</div>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default CoursePage;
