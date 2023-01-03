import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from '../services/firestore';
import {firestoreConverter} from '../services/firestoreConverter';

export const useGetCollectionFromDatabase = () => {
    const collectionAirpodsRef = collection(firestoreDB, 'airpods').withConverter(firestoreConverter);
    const collectionGalaxyBudsRef = collection(firestoreDB, 'galaxybuds').withConverter(firestoreConverter);
    const collectionHuaweiBudsRef = collection(firestoreDB, 'huaweibuds').withConverter(firestoreConverter);
    const collectionOneplusBudsRef = collection(firestoreDB, 'oneplus').withConverter(firestoreConverter);
    const [airpodsValues] = useCollectionData(collectionAirpodsRef);
    const [galaxyBudsValues] = useCollectionData(collectionGalaxyBudsRef);
    const [huaweiBudsValues] = useCollectionData(collectionHuaweiBudsRef);
    const [oneplusBudsValues] = useCollectionData(collectionOneplusBudsRef);

    return {airpodsValues, galaxyBudsValues, huaweiBudsValues, oneplusBudsValues};
}
