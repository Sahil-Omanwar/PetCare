import React from 'react';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

const Feedback = () => {
  return (
    <div className='pt-10 bg-teal-600 h-auto w-full flex flex-col items-center mt-20'>
      {/* Heading with larger size */}
      <div className='mb-8'>
        <h1 className='text-white text-4xl font-bold text-center'>What Our Users Have to Say</h1>
      </div>

      {/* Flex layout for user feedback */}
      <div className='flex flex-col md:flex-row md:justify-between md:px-4 w-full'>
        {/* User Feedback 1 */}
        <div className='flex flex-col items-center text-center bg-white rounded-lg p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 mx-2 my-4 md:my-0'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-teal-600 transform transition-transform duration-300 hover:scale-110'>
            <img src={user1} alt="User Feedback" className='w-full h-full object-cover' />
          </div>
          <p className='text-teal-600 mt-4 text-lg font-medium'>“Very easy to book, maintain history. Hassle-free compared to older methods of booking appointments via telephone. Thanks, Practo for making it simple!”</p>
        </div>

        {/* User Feedback 2 */}
        <div className='flex flex-col items-center text-center bg-white rounded-lg p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 mx-2 my-4 md:my-0'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-teal-600 transform transition-transform duration-300 hover:scale-110'>
            <img src={user2} alt="User Feedback" className='w-full h-full object-cover' />
          </div>
          <p className='text-teal-600 mt-4 text-lg font-medium'>“Very good app. Well thought out regarding booking, rescheduling, and canceling appointments. The doctor’s feedback mechanism is also informative.”</p>
        </div>

        {/* User Feedback 3 */}
        <div className='flex flex-col items-center text-center bg-white rounded-lg p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 mx-2 my-4 md:my-0'>
          <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-teal-600 transform transition-transform duration-300 hover:scale-110'>
            <img src={user3} alt="User Feedback" className='w-full h-full object-cover' />
          </div>
          <p className='text-teal-600 mt-4 text-lg font-medium'>“Very helpful. Far easier than doing the same things on a computer. Allows quick searches with speedy booking, and even maintains history of doctors visited.”</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
