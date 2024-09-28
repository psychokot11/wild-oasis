import supabase, {supabaseURL} from "./supabase";

export async function getCabins() {
    const { data: cabins, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error('An error occurred while fetching cabins')
    }

    return cabins;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseURL);
    const imageName = `${Math.random()}- ${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = hasImagePath ? newCabin.image :`${supabaseURL}/storage/v1/object/public/cabin-images/${imageName}`;
    
    //1. Create/edit cabin
    let query = supabase.from('cabins');

    if (!id)
    //A) Create a new cabin
    query = query
    .insert([{...newCabin, image: imagePath}])

    //B) Edit an existing cabin
    if(id)
    query = query
    .update({...newCabin, image: imagePath})
    .eq('id', id)

    const { data, error } = await query.select().single()

    if (error) {
        console.error(error)
        throw new Error('An error occurred while creating a new cabin')
    }

    //2. Upload image
    if (hasImagePath) return data;
    
    const { error: storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

    //3. Delete the cabin if there was an error uploading the image

    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data[0].id)
        console.error(storageError)
        throw new Error('Cabin image could not be uploaded and the cabin was not created')
    }

    return data;
}

export async function deleteCabin(id) {
    const { data: cabins, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

    if (error) {
        console.error(error)
        throw new Error('An error occurred while deleting the cabin')
    }

    return cabins;
}