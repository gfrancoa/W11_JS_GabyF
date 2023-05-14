function execute (a, b, c){
    let result;
    if(typeof(a)=='string'){
        switch (a) {
            case 'ADD':
                result = b+c;
                break;
            case 'SUB':
                result = b-c;
                break;
            case 'MUL':
                result=b*c;
                break;
            default:
                result='Unknown operation name';
                break;
        }
        return result;
    } else if (typeof(a)=='function'){
        return (a(b,c));
    } else{
        return 'Unknown operation type';
    }
}