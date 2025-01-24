import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    layout('layout/main-layout.tsx', [
        index("routes/home.tsx"),
        route('posts', 'routes/posts.tsx')
    ])
] satisfies RouteConfig;
