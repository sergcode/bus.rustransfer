$(document).ready(function() {

    let translation = {
        name: 'ФИО',
        phone: 'Телефон',
        email: 'Email',
        source: 'Форма источник'
    };

    const source = 'bus';
    const submitURL = 'https://sender.rustransfer.org/api/send';

    let headForm = $('#payment');
    let horizontalForm = $('#no-standard');
    let importantForm = $('#important-customer');
    let retentionModal = $('#customerRetention');

    headForm.submit(function (event) {
        if(event.target.checkValidity())
            sendHeadForm(event.target);
        event.preventDefault();
    });

    horizontalForm.submit(function(event){
        if(event.target.checkValidity())
            sendHorizontalForm(event.target);
        event.preventDefault();
    });

    importantForm.submit(function(event){
        if(event.target.checkValidity())
            sendImportantForm(event.target);
        event.preventDefault();
    });

    retentionModal.submit(function (event) {
        if(event.target.checkValidity())
            sendRetentionModal(event.target);
        event.preventDefault();
    });

    function sendHeadForm(form)
    {
        let data = viewData.headForm;
        data.source = "Форма получить расчет стоимости аренды автотранспорта";
        sendFormData(form, data);
    }

    function sendHorizontalForm(form)
    {
        let data = viewData.horizontalForm;
        data.source = "Форма у Вас нестандартный запрос?";
        sendFormData(form, data);
    }

    function sendImportantForm(form)
    {
        let data = viewData.importantForm;
        data.source = "Форма стать клиентом";
        sendFormData(form, data);
    }

    function sendRetentionModal(form)
    {
        let data = viewData.retentionForm;
        data.source = "Форма удержания клиента";
        $(".customer-retention").fadeOut().removeClass('show').attr('aria-hidden', 'true');
        $(".modal-backdrop_customer").fadeOut();
        setTimeout(function () {
            $('.customer-retention').remove();
            $('.modal-backdrop_customer').remove();
        }, 500);
        sendFormData(form, data);
    }


    function sendFormData(form, data)
    {
        try {

            send(form, data);

        } catch (e) {

            console.error(e);

        }

    }

    function send(form, data)
    {

        let html = htmlData(data);

        let reqData = {
            subject: 'Заявка с сайта bus.rustransfer.org',
            body: html,
            source: source,
            type: "html"
        };

        let strData = JSON.stringify(reqData);

        let req = {
            type: "POST",
            url: submitURL,
            data: strData,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        };

        console.log("sending", req, form);

        let btn = form.getElementsByTagName('button')[0];

        let srcText = btn.innerText;

        btn.setAttribute('disabled', 'true');

        btn.innerText = 'ОТПРАВКА...';

        $.post(req).done(function(data){
            if(data && data.statusCode === 200)
            {
                $('#modalSuccess').modal('show');
                form.classList.remove('was-validated');
                form.reset();
            }
            else
                $('#modalFailure').modal('show');
        }).fail(function(){
            $('#modalFailure').modal('show');
        }).always(function(){
            btn.removeAttribute('disabled');
            btn.innerText = srcText;
        });
    }

    function translate(name)
    {
        let trnslt = translation[name];

        if(trnslt)
            return trnslt;
        else
            return name;
    }

    function htmlData(data) {
        let arr = [];

        let keys = Object.keys(data);

        keys.forEach(function (item) {

            arr.push('<p>' + translate(item) + ' : ' + data[item] + '</p>');

        });

        return arr.join('\r\n</br>\r\n');
    }

});
