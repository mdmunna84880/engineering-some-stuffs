function ComplexDashboardLayout({children, notifications, userAnalytics, revenuMatrics, login}: {children: React.ReactNode, notifications: React.ReactNode, userAnalytics: React.ReactNode, revenuMatrics: React.ReactNode, login: React.ReactNode
}) {
    const isLogin = true;
    return isLogin?( 
        <div>
            {children}
            <div className=" m-12 flex justify-between">
                <div className="flex flex-col justify-between">
                    <div>
                        {userAnalytics}
                    </div>
                    <div>
                        {revenuMatrics}
                    </div>
                </div>
                <div>
                    {notifications}
                </div>

            </div>
        </div>
     ): (
        <div>
            {login}
        </div>
     );
}

export default ComplexDashboardLayout;