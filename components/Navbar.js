import Image from 'next/image';
import logo from '../images/linkedIn.png';

function Navbar() {
    return (
        <div>
            <div className="flex content-around">
                <Image src={logo} width={20} height={20}/>
            </div>
        </div>
    )
}

export default Navbar
