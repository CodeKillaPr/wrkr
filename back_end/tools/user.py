import random
import json


def generate_random_jobs(n=1):
    jobs = []
    titles = ["developer", "designer", "manager", "analyst", "engineer",
              "consultant", "technician", "coordinator", "administrator", "specialist"]
    descriptions = [
        "Responsible for overseeing project management and ensuring timely delivery of all project milestones",
        "Conducting comprehensive data analysis to support business decisions and strategic planning",
        "Development and implementation of software applications and systems to meet client needs",
        "Providing technical support and troubleshooting issues for end-users and clients",
        "Maintenance and optimization of hardware and software systems to ensure smooth operations",
        "Customer service and support for product-related inquiries and troubleshooting",
        "System administration and network management to ensure security and efficiency",
        "Quality control and assurance for products and services to meet industry standards",
        "Conducting research and development for new products and innovative solutions",
        "Sales and marketing of products and services to drive business growth and customer engagement"
    ]
    locations = ["San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo",
                 "Mayagüez", "Trujillo Alto", "Arecibo", "Fajardo"]
    time_frames = ["4 hr", "6 hr", "8 hr", "10 hr"]

    for _ in range(n):
        job = {
            # Generar un ID único para cada trabajo
            "title": random.choice(titles),
            "description": random.choice(descriptions),
            # Paga entre $10 y $50
            "pay": f"{round(random.uniform(10, 50), 2)}",
            "location": random.choice(locations),
            "time_frame": random.choice(time_frames),
        }
        jobs.append(job)
    return jobs


random_jobs = generate_random_jobs()
json_output = json.dumps(random_jobs, indent=4)
json_output


print(json_output)
