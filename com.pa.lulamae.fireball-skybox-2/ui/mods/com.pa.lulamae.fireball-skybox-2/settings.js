try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Fireball by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.fireball-skybox-2/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}