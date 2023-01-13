import React from 'react'

export default function Breathing() {
    return (
        <div className="wrapper">
            <div className="directions">
                <div className="message">Inhale</div>
                <div className="message">Hold</div>
                <div className="message">Exhale</div>
                <div className="message">Hold</div>
            </div>
            <div className="timer inhale">
                <div className="progress"></div>
                <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>
            <div className="timer inhale-hold">
                <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>
            <div className="timer exhale">
                <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>
            <div className="timer exhale-hold">
                <div className="indicators">
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                    <div className="indicator"></div>
                </div>
            </div>
        </div>
    )
}
