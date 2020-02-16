module.exports={
    moudle:{
        rule:[
            {
                test:/\.js$/,
                use:[
                    "babel-loader"
                ]
            },
            {
                test:/\.css$/,
                use:[
                    // MiniCss
                ]
            }

        ]
    }
}