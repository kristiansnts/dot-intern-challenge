const Quizes = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="question-wrapper">
                    <p>is Suidward Octopus</p>
                </div>
                <div className="question-list">
                    <ul>
                        <li><button>Answer A</button></li>
                        <li><button>Answer B</button></li>
                        <li><button>Answer C</button></li>
                        <li><button>Answer D</button></li>
                    </ul>
                </div>
                <button>Next</button>
            </div>
        </>
     );
}
 
export default Quizes;