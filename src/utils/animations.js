export const animateWithGsapTimeline = (timeline,
    rotationRef, rotationState, firstTarget, secondTarget, 
    animationProps
) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
        // onUpdate: () => {
        //     firstTarget.current.rotation.y = rotationRef.current.rotation.y;
        //     secondTarget.current.rotation.y = rotationRef.current.rotation.y;
        // },
        // ...animationProps
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        '<'
    )
}