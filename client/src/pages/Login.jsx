
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = () => {
        console.log(username,password)
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
                    <Button type="submit" className="w-full" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
        </section>
    )
}

export default Login
