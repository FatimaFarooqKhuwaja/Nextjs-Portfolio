export default function Home() {
  return (
    <div>
      {/*middle start here*/}

      <h1 className="text-2xl font-bold ml-5 pt-8">
        Hi I am <span className="text-5xl text-pink-700">Fatima</span>
      </h1>

      <p className="ml-5 text-xl mt-2">
        I am a web developer.I am expert in HTML CSS TYPESCRIPT and currently
        exploring
        <br />
        NEXTjs.This is my space to share my thoughts, experience and skills.I
        will add my skills section,project section in my portfolio.
        <br />
        <br />
        <span className="text-pink-700 text-2xl font-bold md:text-3xl">
          Grab a cup of coffee and stay a while!
        </span>
      </p>

      <div className="flex justify-around mt-2">
        <div>
          <ul className=" ml-2 mt-[90px] text-xl p-1 mb-2 text-pink-800 font-bold md:text-2xl">
            <li>Name: Fatima</li>
            <li>Age: 15 years</li>
            <li>Class: 1st-year</li>
            <li>Student: GIAIC</li>
            <li>Experience: 1-year</li>
          </ul>
        </div>

        <div>
          <img
            src="https://img.freepik.com/premium-vector/cute-girl-working-laptop-home-vector-illustration-cartoon-style_1142-68550.jpg"
            alt="picturs"
            className="h-70 w-60 rounded-full md:ml-auto md:h-[350px] md:w-[350px] "
          ></img>
        </div>
      </div>

      <p className="text-xl font-bold ml-[25px] mr-[25px] pb-4 mt-[30px]  ">
        I'm Fatima Farooq Khuwaja, a passionate full stack developer with
        expertise in building dynamic and responsive web applications. With a
        strong foundation in both front-end and back-end technologies, I strive
        to create seamless user experiences and efficient solutions.
      </p>
      {/*middle end here*/}
    </div>
  );
}
