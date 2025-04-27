import { motion } from "framer-motion";
import "./about.css"
const About = () => {
    return (
        <motion.section
            className="about-motion"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}  // הופך את האנימציה לאיטית ומודגשת יותר
        >
            <div className="about-container">
                <section class="about-me-english">
                    <h2 className="about-title">About Me</h2>
                    <p>
                        I am Iti Donat, a full-stack developer who turns ideas into real solutions that inspire and last.<br />
                        I am passionate about full-stack development and see every challenge as an opportunity to create, solve problems, and succeed.<br />
                        My work is guided by a simple and strong belief: Imagine possibilities. Solve challenges. Achieve success.<br />
                        Every project is a journey to learn, write clean code, and deliver real results that empower users and businesses.<br />
                        Join me in building a future where technology has no limits.
                    </p>
                </section>
                {/* <section class="about-me-hebrew">
                    <h2 className="about-title">אודותיי</h2>
                    <p>
                        <span></span>
                        אני איטי דונט, מפתחת פול-סטאק שמתרגמת רעיונות לפתרונות אמיתיים שמעוררים השראה ונשארים לאורך זמן.<br />
                        יש לי תשוקה עמוקה לפיתוח פול-סטאק, ואני רואה בכל אתגר הזדמנות ליצור, לפתור בעיות ולהצליח.<br />
                        העבודה שלי מונחית על ידי אמונה פשוטה אך חזקה: לדמיין אפשרויות. לפתור אתגרים. להשיג הצלחות.<br />
                        כל פרויקט הוא מסע של למידה, כתיבת קוד נקי והגשמת תוצאות אמיתיות שמקדמות משתמשים ועסקים.<br />
                        אני מזמינה אתכם להצטרף אליי ליצירת עתיד שבו לטכנולוגיה אין גבולות.
                    </p>
                </section> */}

            </div>

        </motion.section>
    );
}
export default About