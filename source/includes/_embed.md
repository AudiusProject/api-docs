# Embed SDK

The Embed Javascript SDK allows you to control the embedded player and listen to events.

## Including Embed Script

The SDK works by communicating with the iframe via a helper script. Simply include the script in your HTML page:

`<script src="https://audius.co/embed/api.js"></script>`

Once you've included the script, you can begin connecting to your iframe using the globally available Audius helper.

## Creating A New Instance

> Code Sample

```javascript

const iframe = document.querySelector('iframe')
let embed = Audius.Embed(iframe)

```

## Actions

The SDK provides several methods that you can call on your instance to perform actions on the player,
or receive information concerning the player's state.

|Name|Description|Returns|
|---|---|---|---|
|getDuration|Returns the duration of the track|Number|
|getPosition|Returns the current position of the track|Number|
|togglePlay|Plays the track if it is paused and pauses the track if it is playing|Void|
|seekTo|Sets the track's position|Void|
|setVolume|Sets the volume of the track. Accepts a value between 0 and 1|Void|
|stop|Stops the track and resets its position to 0|Void|

> Code Sample

```javascript

const currentPosition = embed.getPosition()
embed.stop()

```

## Events

The SDK provides several events that you can listen, and respond to. Call the bind method on your embed instance
to register a callback for events. 

|Name|Description|
|---|---|---|
|Audius.Events.PLAY|Called when a track begins playing via the play button|
|Audius.Events.PLAY_PROGRESS|Called periodically as track plays|
|Audius.Events.PAUSE|Called when the track is paused via the pause button|
|Audius.Events.FINISH|Called when the track finishes|
|Audius.Events.ERROR|Called if there is an error loading the track|
|Audius.Events.READY|Called when the track is ready to be played|

> Code Sample

```javascript

embed.bind(Audius.Events.READY, () => {
  console.log('Audius track is ready to play')
})

embed.bind(Audius.Events.PLAY, () => {
  console.log('Audius track has begun playing')
})

```

<br />
<br />
