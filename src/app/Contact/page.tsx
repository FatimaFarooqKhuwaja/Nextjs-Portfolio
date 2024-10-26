function Contact() {
  return (
    <div>
       <h1 className="text-5xl text-pink-700 font-bold text-center pt-12">Contact Us</h1>
     <div className="md:flex md:justify-around mt-5 ">
      <div className="pl-7">
      <div className="bg-pink-200 mt-7 w-[300px] pt-1 h-[35px] md:w-[600px] md:m-10 rounded-2xl md:text-3xl text-pink-800 text-center">Email : <a href="mailto:fatimafarooqkhuwaja@gmail.com">fatimafarooqkhuwaja@gmail.com</a></div>
      <div className="bg-pink-200 mt-9 w-[300px] pt-1 h-[35px] md:w-[600px] md:m-10 rounded-2xl md:text-3xl text-pink-800 text-center"><a href="https://github.com/FatimaFarooqKhuwaja">Github : fatimafarooqkhuwaja</a></div>
      <div className="bg-pink-200 mt-9 w-[300px] pt-1 h-[35px] md:w-[600px] md:m-10 rounded-2xl md:text-3xl text-pink-800 text-center">Npm : fatimafarooqkhuwaja</div>
      <div className="bg-pink-200 mt-9 w-[300px] pt-1 h-[35px] md:w-[600px] md:m-10 rounded-2xl md:text-3xl text-pink-800 text-center md:mb-[150px]">Number : +92 3193453351</div>
    </div>

   <div className="flex justify-center">
    <img src="https://ahc-webservices.sites.medinfo.ufl.edu/files/2011/07/social-media.jpg" 
    className=" rounded-full h-[200px] w-[250px] mt-5 mb-5"></img>
    </div>
    </div>
    </div>
  );
}
export default Contact;
