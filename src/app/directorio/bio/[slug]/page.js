export default  function Detail(props){
    const {params} = props;
    const {slug} = params
    return (
        <div>
            detail {slug}
        </div>
    );
}