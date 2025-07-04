type courseType = {
  title: string;
  monthDuration: number;
}

export const Courses = ({course}:{course: courseType}) => {
    return (
        <>
        <ul>
            <li className={'text'}>{course.title}</li>
            <li className={'text'}>{course.monthDuration}</li>
        </ul>
        </>
    );
};