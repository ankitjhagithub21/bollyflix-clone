
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async() => {
       
        if(isLoading) return;
        if(username.length === 0 || password.length===0){
            return toast.error("All fields are required.")
        }
        setIsLoading(true)
        try{
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password})
            })

            const data = await res.json()

            if(data.success){
                localStorage.setItem('token',data.token)
                toast.success(data.message)
                navigate("/admin/dashboard")
            }else{
                toast.error(data.message)
            }

        }catch(error){
            toast.error(data.message)
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }

    

    return (
        <section className="w-screen h-screen p-5 flex items-center justify-center">
            <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your username and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Your username" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="******" required />
                    </div>
                    <Button type="submit"  className="w-full" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
        </section>
    )
}

export default Login
