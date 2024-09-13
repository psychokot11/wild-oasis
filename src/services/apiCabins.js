import supabase from "./supabase";

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

export async function createCabin(newCabin) {
    const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()

    if (error) {
        console.error(error)
        throw new Error('An error occurred while creating a new cabin')
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