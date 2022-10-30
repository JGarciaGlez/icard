import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin/";
 export const routesAdmin = [
    {
        path:'/admin',
        layout: AdminLayout,
        component:HomeAdmin,

    },
]

