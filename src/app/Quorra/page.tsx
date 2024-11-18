import { FC } from "react";

const Quorra: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quorra</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Schedule</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>7:30am:</strong> Wakes up and will want to come out</li>
            <li><strong>8:00am:</strong> Feed breakfast 1-1.5 cups kibble (optional: 6 blueberries and/or peeled large carrot)</li>
            <li><strong>8:05-8:10am:</strong> Bathroom</li>
            <li>
              <strong>8:10-8:45am:</strong> Walk/run, feed treats during walk, don&apos;t run until near the end of the walk (dog shouldn&apos;t exercise hard within 30 minutes of eating)
            </li>
            <li><strong>8:45-10am:</strong> Chill around house/play</li>
            <li><strong>10:30am:</strong> Bathroom then in crate</li>
            <li><strong>2-2:45pm:</strong> Play/training/bathroom</li>
            <li><strong>5pm:</strong> Dinner to total 3 cups kibble/day</li>
            <li><strong>5-8pm:</strong> Play/chill around house</li>
            <li><strong>8-10pm:</strong> Crate</li>
            <li><strong>10pm:</strong> Bedtime</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Food</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Scoop in food bag (1 cup). Top of scoop is more than 1 cup.</li>
            <li>1 scoop probiotic/day (½ breakfast, ½ dinner).</li>
            <li>Use any bowl and add a small amount of water to slow her eating.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Training</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Train anytime, mostly reward good behaviors (e.g., settling, asking to go out).</li>
            <li>Use treats at the right hip during walks.</li>
            <li>Don&apos;t repeat commands; use hand motions or wait.</li>
            <li>Say &quot;good&quot; immediately after correct action; treat can be delayed.</li>
            <li>Sessions: 5-10 minutes max.</li>
            <li>Pinch treats to avoid nipping; no treats visible until after command.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Bathroom</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Rings doorbells to go out; say &quot;good&quot; when she does.</li>
            <li>Pees every 2-3 hours out of crate; 3-6 hours in crate.</li>
            <li>Bathroom immediately after crate or short nap.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Crate</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Use crate when unsupervised for more than 1 minute.</li>
            <li>Command with &quot;crate&quot; and treat; throw treats if needed.</li>
            <li>Settle within 1-2 minutes; ignore banging to avoid encouraging bad behavior.</li>
            <li>Snuggle pup should always be in crate.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Brushing</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Brush weekly with treats.</li>
            <li>Focus on neck, ears, back, hips, forearms, and tail.</li>
            <li>Use metal brush carefully to avoid hurting her.</li>
            <li>Stop if she bites brush; resume when calmer.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Toys</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Limit toys out at once.</li>
            <li>Supervise rope/string toys; avoid swallowing strings.</li>
            <li>Inspect bones regularly; replace if pieces come off.</li>
            <li>Play tug with rope only, not stuffed toys.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Walking</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Stay at the right hip; stop if she pulls.</li>
            <li>Use harness with leash clipped to the back.</li>
            <li>Avoid meeting other dogs/people unless necessary.</li>
            <li>Discourage jumping on people; use treats to redirect.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Quorra;
