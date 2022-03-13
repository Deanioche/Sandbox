/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_count_if.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/30 17:29:15 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/30 17:29:17 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_count_if(char**tab, int length, int(*f)(char*))
{
	int		cnt;
	int		i;

	i = 0;
	cnt = 0;
	while (i < length)
	{
		if (f(tab[i]) != 0)
			cnt++;
		i++;
	}
	return (cnt);
}
