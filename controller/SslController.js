const SSLCommerzPayment = require('sslcommerz')

exports.initSSL = async (req,res) => {
    console.log("hitting")
    const productInfo = {
        total_amount: req.body.amount,
        currency: 'BDT',
        tran_id: 'uniqe',
        success_url: 'https://bejewelled-salmiakki-c36e8f.netlify.app/success',
        fail_url: 'https://bejewelled-salmiakki-c36e8f.netlify.app/fail',
        cancel_url: 'https://bejewelled-salmiakki-c36e8f.netlify.app/fail',
        ipn_url: 'https://bejewelled-salmiakki-c36e8f.netlify.app/',
        paymentStatus: 'pending',
        shipping_method: 'Courier',
        product_name: 'computer',
        product_category: 'Electronic',
        product_profile: 'okimage',
        product_image:'img',
        cus_name: 'rakib',
        cus_email: 'rakib',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'testrakibn992',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };

    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
    sslcommer.init(productInfo).then(data => {
        
        const info = { ...productInfo, ...data }
        console.log(info.GatewayPageURL)
        if (info.GatewayPageURL) {
            return res.json(info.GatewayPageURL)
        }
        else {
            return res.status(400).json({
                message: "SSL session was not successful"
            })
        }

    });
}

exports.successSSL = async (req,res) => {
    res.redirect(`https://bejewelled-salmiakki-c36e8f.netlify.app/success`)
}

exports.failSSL = async (req,res) => {
    res.redirect(`https://bejewelled-salmiakki-c36e8f.netlify.app/fail`)
}

exports.cancalSSL = async (req,res) => {
    res.redirect(`https://bejewelled-salmiakki-c36e8f.netlify.app/fail`)
}