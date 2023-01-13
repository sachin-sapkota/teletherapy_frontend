import React, { useEffect } from 'react'

export default function Pomodoro() {
    var pomodoro = {
        started: false,
        minutes: 0,
        seconds: 0,
        fillerHeight: 0,
        fillerIncrement: 0,
        currentMode: "none",
        interval: null,
        minutesDom: null,
        secondsDom: null,
        fillerDom: null,
        init: function () {
            var self = this;
            this.minutesDom = document.querySelector('#minutes');
            this.secondsDom = document.querySelector('#seconds');
            this.fillerDom = document.querySelector('#filler');
            this.interval = setInterval(function () {
                self.intervalCallback.apply(self);
            }, 1000);
            document.querySelector('#work').onclick = function () {
                self.startWork.apply(self);
            };
            document.querySelector('#shortBreak').onclick = function () {
                self.startShortBreak.apply(self);
            };
            document.querySelector('#longBreak').onclick = function () {
                self.startLongBreak.apply(self);
            };
            document.querySelector('#stop').onclick = function () {
                self.stopTimer.apply(self);
            };
        },
        resetVariables: function (mins, secs, started, isModeChanged) {
            this.minutes = mins;
            this.seconds = secs;
            this.started = started;
            this.fillerIncrement = 200 / (this.minutes * 60);
            this.fillerHeight = !isModeChanged ? this.fillerHeight : 0;
        },
        startWork: function () {
            if (this.currentMode == "start") {
                this.resetVariables(this.minutes, this.seconds, true, false);
            } else {
                this.currentMode = "start"
                this.resetVariables(25, 0, true, true);
            }
        },
        startShortBreak: function () {
            if (this.currentMode == "shortBreak") {
                this.resetVariables(this.minutes, this.seconds, true, false);
            } else {
                this.currentMode = "shortBreak"
                this.resetVariables(5, 0, true, true);
            }
        },
        startLongBreak: function () {
            if (this.currentMode == "longBreak") {
                this.resetVariables(this.minutes, this.seconds, true, false);
            } else {
                this.currentMode = "longBreak"
                this.resetVariables(15, 0, true, true);
            }
        },
        stopTimer: function () {
            this.resetVariables(this.minutes, this.seconds, false, false);
            this.updateDom();
        },
        toDoubleDigit: function (num) {
            if (num < 10) {
                return "0" + parseInt(num, 10);
            }
            return num;
        },
        updateDom: function () {
            this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
            this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
            this.fillerHeight = this.fillerHeight + this.fillerIncrement;
            this.fillerDom.style.height = this.fillerHeight + 'px';
        },
        intervalCallback: function () {
            if (!this.started) return false;
            if (this.seconds == 0) {
                if (this.minutes == 0) {
                    this.timerComplete();
                    return;
                }
                this.seconds = 59;
                this.minutes--;
            } else {
                this.seconds--;
            }
            this.updateDom();
        },
        timerComplete: function () {
            this.started = false;
            this.fillerHeight = 0;
        }
    };

    useEffect(() => {
        pomodoro.init();
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div id="pomodoro-app">
                <div id="pomodoroContainer">
                    <div id="timer">
                        <div id="time">
                            <span id="minutes">25</span>
                            <span id="colon">:</span>
                            <span id="seconds">00</span>
                        </div>
                        <div id="filler"></div>
                    </div>

                    <div id="buttons">
                        <button id="work">Work</button>
                        <button id="shortBreak">Short Break</button>
                        <button id="longBreak">Long Break</button>
                        <button id="stop">Stop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}