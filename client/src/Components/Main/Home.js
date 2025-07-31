import React from 'react'
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <div className="bg-gray-bg text-white-900">
            <div className="relative bg-gray-darkest">
                <img className="w-full" src={bg} alt="" />
            </div>
            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} className="w-full rounded-lg shadow-lg" src={bg2} alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div>
            <h1 className='font-bold text-center text-darkred my-4 text-lg underline'>Learn About Donation</h1>
            <div className='flex px-20 bg-gray-darkest p-6 rounded-lg mx-4'>
                <div className="flex-1">
                    <img src={donationFact} width="90%" alt="" className="rounded-lg" />
                    <p className='text-center mt-4 text-gray-light'>
                        <code className="bg-gray-dark p-2 rounded">After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p>
                </div>
                <div className="flex-1 ml-8">
                    <table className='w-full border-collapse' cellPadding={8}>
                        <tr>
                            <td colSpan={3} className="border border-gray-dark bg-darkred text-white-900 text-center font-bold p-3">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border border-gray-dark bg-gray-dark text-white-900 text-lg p-2'>Blood Type</th>
                            <th className='border border-gray-dark bg-gray-dark text-white-900 text-lg p-2'>Donate Blood To</th>
                            <th className='border border-gray-dark bg-gray-dark text-white-900 text-lg p-2'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border border-gray-dark bg-gray-bg text-white-900 text-lg p-2 text-center'>{e.blood}</td>
                                    <td className='border border-gray-dark bg-gray-bg text-white-900 text-lg p-2'>{e.donate}</td>
                                    <td className='border border-gray-dark bg-gray-bg text-white-900 text-lg p-2'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-xl underline font-bold text-darkred text-center mt-8 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center gap-6 px-8'>
                {temp2.map((e, i) =>
                    <div className='border-gray-dark border-2 bg-gray-darkest shadow-lg rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
                        <div><img src={e.img} draggable={false} width="100%" alt="" className="h-full object-cover" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-white-900 mb-2'>{i + 1} - {e.title}</h1>
                            <p className='text-justify text-gray-light'>Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit. Doloribus, as aliquam corporis dolorem consectetur qui libero, veritatis, nihil alias repellat quam architecto nobis laudantium ipsum nemo nesciunt quisquam est odit ad?</p>
                        </div>
                    </div>
                )}
            </div>
            <br />
            <div className='w-full bg-darkred text-white-900 h-max text-sm text-center font-bold py-4'>
                <code>ॐ Bloodconnect @ {new Date().getFullYear()} ॐ || Made with ❤️ by Ujjwal</code>
            </div>
        </div>
    )
}

export default Home