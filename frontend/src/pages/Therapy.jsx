import React from 'react';

const Therapy = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the New Page!</h1>
            <p className="text-lg text-gray-700 mt-4">This is a new page styled with Tailwind CSS.</p>

            <h1>Book an Appointment</h1>

            <div>
                
            </div>
            
            <div style={{ width: '100%', height: '600px', border: '0', overflow: 'hidden' }}>
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1r6NBlBp2qmfd6qUqSPY716cAvKAGKKe5gORgKwwCN31RAma6ztgj207h4SciFZiAzvjpp7LiW?gv=true"
                style={{ border: '0', width: '100%', height: '100%',  }}
                frameBorder="0"
                allowFullScreen
                title="Google Calendar Appointment Scheduler"
                class="pointer-events-none"
                
            ></iframe>
        </div>
        </div>
    );
};

export default Therapy;