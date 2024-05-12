{/* <Card className="w-[400px] bg-[#192339] pb-6">
            <CardHeader className="flex items-start justify-center">
              <CardTitle className="text-white">Login</CardTitle>
              <CardDescription>Login to View Your Dashboards</CardDescription>
            </CardHeader>
            <CardContent className="text-white pb-0">
              <p className="text-lg">
                Email <span className="text-red-500">*</span>
              </p>
            </CardContent>
            <Input
              required
              onChange={(event) => setEmail(event.target.value)}
              className="bg-[#192339] items-start ml-6 w-[90%] text-white text-md mb-2 outline-2 border-slate-500 focus:border-white"
              placeholder="example@email.com"
            ></Input>
            <CardContent className="text-white pb-0">
              <p className="text-lg">
                Password <span className="text-red-500">*</span>
              </p>
            </CardContent>
            <Input
              required
              onChange={(event) => setPassword(event.target.value)}
              className="bg-[#192339] items-start ml-6 w-[90%] text-white mb-2 outline-1 border-slate-500 focus:border-white"
              placeholder="password"
              type="password"
              onKeyDown={(e) => e.key === "Enter" && login(email, password)}
            ></Input>
            <CardContent className="flex items-center justify-center pb-0">
              <Button
                onClick={() => {
                  if (email === "lebron") {
                    notify("⚠️ Email and password required.");
                  } else {
                    router.push("/api/auth/login");
                  }
                }}
                className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-300 rounded-full items-center justify-center w-[200px] text-lg mt-2 hover:brightness-90"
              >
                Login
              </Button>
              <ToastContainer position="top-center" theme="dark" />
            </CardContent>
          </Card> */}