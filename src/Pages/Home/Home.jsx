
import { Link } from 'react-router'
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import Button from '../../Commponents/commen/Button'

const Home = () => {
    return (
        <>
            <div className='  text-white flex justify-center items-center m-auto text-center  pt-10'>
                <div className=' shadow-2xl mt-20  px-6 py-15 max-w-lg  w-full' >
                    <h1 className='text-6xl p-10  text-center'>Welcom Back</h1>
                    <div className='flex flex-col gap-5'>
                        <Button   title="LOG IN" Link="Login" />
                        <Button  title="SIGN UP" Link="SignUp" />
                    </div>
                    <p className='p-8'>continue with social media if you have account</p>
                    <div className='flex justify-center items-center gap-4 '>
                        <FaGoogle  className='bg-white text-[#b20b1f] p-1.5 text-4xl rounded-full'/>
                        <FaTwitter  className='bg-white text-[#b20b1f] p-1.5 text-4xl rounded-full'/>
                        <FaFacebook className='bg-white text-[#b20b1f] p-1.5 text-4xl rounded-full' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
