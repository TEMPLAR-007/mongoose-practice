import mongoose from 'mongoose';
import app from './app'

const port = 5000

// database connection 
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("database connected succesfully");

        app.listen(port, () => {
            console.log(`test app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(`failed to connect, ${err}`);

    }
}

main()

