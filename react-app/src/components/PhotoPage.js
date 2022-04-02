import GetLocationsImages from "./GetLocationsImages";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AllComments from "./AllComments";




function PhotoPage() {





    return (
        <div className='establishment-images'>
            <GetLocationsImages imageId={image.id} locationId={locationId} />
        </div>
    );
};
export default PhotoPage