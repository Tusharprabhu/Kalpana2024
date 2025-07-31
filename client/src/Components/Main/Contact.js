import React from 'react'
import cc from "../../assets/cc.png"

const Contact = () => {
    const data = [
        {
            title: "Tushar related queries, feedback and suggestions", body: [
                "PES University",
                "100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka - 560085",
                "8527890830",
                "tushar[at]pes[dot]edu"
            ]
        },
        {
            title: "For Administrative queries", body: [
                "PES University RR Campus",
                "100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka - 560085"
            ]
        },
        { title: "For administrative queries", body: ["PES University RR Campus", "100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka - 560085"] }
    ];
    return (
        <div className='px-64 bg-rose-200 text-gray-800 min-h-screen py-8'><br />
            <h1 className='text-center text-3xl font-bold text-darkred'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline text-darkred'>{e.title}</p><br />
                                    <code className="bg-rose-300 p-2 rounded">
                                        {e.body.map((k) => {
                                            return <p className='text-md text-gray-700'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={cc} draggable={false} width="90%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact